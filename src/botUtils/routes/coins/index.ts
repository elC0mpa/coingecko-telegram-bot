import { Context, Telegraf } from 'telegraf'
import { Update } from 'telegraf/typings/core/types/typegram'
import { WizardsStageType } from '../../../types'
import { SceneIDS, UserInteractionConstants } from '../../constants'
import { registerScenes } from './scenes'

export const initCoinsRoutes = (bot: Telegraf<Context<Update>>, wizardStage: WizardsStageType) => {
  registerScenes(wizardStage)
  wizardStage.hears(UserInteractionConstants.COINS_DATA_ACTION, ctx => {
    ctx.scene.enter(SceneIDS.COIN_DATA)
  })

  wizardStage.hears(UserInteractionConstants.TRENDING_ACTION, ctx => {
    ctx.scene.enter(SceneIDS.COIN_TRENDING)
  })
}
