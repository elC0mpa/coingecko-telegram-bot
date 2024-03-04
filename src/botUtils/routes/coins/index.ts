import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'
import { WizardsStageType } from '../../../types'
import { SceneIDS, UserInteractionConstants } from '../../constants'
import { CoinsMenuKeyboard } from '../../keyboards'
import { registerScenes } from './scenes'

export const initCoinsRoutes = (bot: Telegraf<Context<Update>>, wizardStage: WizardsStageType) => {
  registerScenes(wizardStage)
  bot.hears(UserInteractionConstants.COINS_MENU, ctx => {
    ctx.reply('Menú Criptos', CoinsMenuKeyboard)
  })
  wizardStage.hears(UserInteractionConstants.COINS_DATA_ACTION, ctx => {
    console.log('Escuchando')
    ctx.scene.enter(SceneIDS.COIN_DATA)
  })
}
