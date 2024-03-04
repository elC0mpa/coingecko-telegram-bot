import { Update } from '@telegraf/types'
import { Context, Scenes } from 'telegraf'

export type WizardsStageType = Scenes.Stage<
  Context<Update> & {
    scene: Scenes.SceneContextScene<any, Scenes.WizardSessionData>
    wizard: Scenes.WizardContextWizard<any>
  },
  Scenes.SceneSessionData
>
