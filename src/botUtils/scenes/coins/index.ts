import { Scenes } from 'telegraf'
import { message } from 'telegraf/filters'
import { MainMenuKeyboard, NoKeyboard, createSelectByLabelKeyboard } from '../../keyboards'
import { SceneIDS } from '../../constants'
import searchService from '../../../services/searchService'
import coinService from '../../../services/coinService'

export const coinDataWizard = new Scenes.WizardScene(
  SceneIDS.COIN_DATA,
  async ctx => {
    ctx.reply(
      'Por favor inserte el nombre de la criptomoneda que quiere inspeccionar\nNo tiene que insertar el nombre completamente',
      NoKeyboard
    )
    return ctx.wizard.next()
  },
  async ctx => {
    if (!ctx.has(message('text'))) {
      ctx.reply('Por favor inserte un texto')
      return
    }
    const query = ctx.message.text
    const cryptos = await searchService.searchCriptos(query)
    ctx.reply('Por favor seleccione una de las criptomonedas en el teclado', createSelectByLabelKeyboard(cryptos, 'id'))
    return ctx.wizard.next()
  },
  async ctx => {
    if (!ctx.has(message('text'))) {
      ctx.reply('Por favor inserte un texto')
      return
    }
    const coinData = await coinService.getCoinData(ctx.message.text)
    ctx.reply(`Usted seleccionó la cripto ${coinData.name} cuyo valor actual es de ${coinData.market_data.current_price["usd"]}`, MainMenuKeyboard)
    return ctx.scene.leave()
  }
)
