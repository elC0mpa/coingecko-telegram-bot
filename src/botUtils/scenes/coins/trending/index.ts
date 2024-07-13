import { Scenes } from 'telegraf'
import { message } from 'telegraf/filters'
import coinService from '../../../../services/coinService'
import searchService from '../../../../services/searchService'
import { SceneIDS } from '../../../constants'
import { getCoinInfo } from '../../../formatters/coins'
import { createSelectByLabelKeyboard, MainMenuKeyboard } from '../../../keyboards'

export const coinTrendingWizard = new Scenes.WizardScene(
  SceneIDS.COIN_TRENDING,
  async ctx => {
    const trendingCurrencies = await searchService.trendingData()
    ctx.reply('Por favor seleccione la criptomoneda', createSelectByLabelKeyboard(trendingCurrencies, 'id'))
    return ctx.wizard.next()
  },
  async ctx => {
    if (!ctx.has(message('text'))) {
      ctx.reply('Por favor inserte un texto')
      return
    }
    const currencyId = ctx.message.text
    const currencyData = await coinService.getCoinData(currencyId)
    await ctx.replyWithPhoto(
      { url: currencyData.image.large },
      { caption: getCoinInfo(currencyData), parse_mode: 'HTML' }
    )
    ctx.reply('Menú Principal', MainMenuKeyboard)
    ctx.scene.leave()
  }
)
