import { WizardsStageType } from '../../../types'
import { coinDataWizard } from '../../scenes/coins/data'
import { coinTrendingWizard } from '../../scenes/coins/trending'

const scenes = [coinDataWizard, coinTrendingWizard]
export const registerScenes = (wizardsStage: WizardsStageType) => {
  scenes.forEach(scene => {
    wizardsStage.register(scene)
  })
}
