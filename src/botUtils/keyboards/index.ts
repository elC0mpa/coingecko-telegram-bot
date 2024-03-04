import { Markup } from 'telegraf'
import { UserInteractionConstants } from '../constants'

export const MainMenuKeyboard = Markup.keyboard([
  [UserInteractionConstants.COINS_MENU],
  [UserInteractionConstants.TRENDING_MENU],
])

export const CoinsMenuKeyboard = Markup.keyboard([
  [UserInteractionConstants.COINS_DATA_ACTION],
  [UserInteractionConstants.COINS_HISTORICAL_DATA_ACTION],
  [UserInteractionConstants.MAIN_MENU],
])
