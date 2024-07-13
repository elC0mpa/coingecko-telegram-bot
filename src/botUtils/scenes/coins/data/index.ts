import { Scenes } from 'telegraf'
import { message } from 'telegraf/filters'
import coinService from '../../../../services/coinService'
import searchService from '../../../../services/searchService'
import { SceneIDS } from '../../../constants'
import { getCoinInfo } from '../../../formatters/coins'
import { createSelectByLabelKeyboard, MainMenuKeyboard, NoKeyboard } from '../../../keyboards'

export const coinDataWizard = new Scenes.WizardScene(
  SceneIDS.COIN_DATA,
  async ctx => {
    ctx.reply(
      'Inserte el nombre de la criptomoneda de la cual desea obtener la información.\nNo tiene que insertar el nombre completo',
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
    const options = await searchService.searchCriptos(query)
    ctx.reply('Por favor seleccione la criptomoneda', createSelectByLabelKeyboard(options, 'id'))
    ctx.wizard.next()
  },
  async ctx => {
    if (!ctx.has(message('text'))) {
      ctx.reply('Por favor inserte un texto')
      return
    }
    const currencyId = ctx.message.text
    const currencyData = await coinService.getCoinData(currencyId)
    await ctx.replyWithPhoto(
      { url: currencyData.image.large, },
      { caption: getCoinInfo(currencyData), parse_mode: 'HTML' }
    )
    ctx.reply('Menú Principal', MainMenuKeyboard)
    ctx.scene.leave()
  }
)
