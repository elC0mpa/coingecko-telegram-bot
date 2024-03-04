import { WizardsStageType } from '../../../types'
import { coinDataWizard } from '../../scenes/coins/data'

const scenes = [coinDataWizard]
export const registerScenes = (wizardsStage: WizardsStageType) => {
  scenes.forEach(scene => {
    wizardsStage.register(scene)
  })
}
