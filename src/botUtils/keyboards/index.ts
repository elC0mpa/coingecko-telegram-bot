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

export const NoKeyboard = Markup.removeKeyboard()

export const createSelectByLabelKeyboard = (items: any[], label: string, customElements: any[] = []) => {
  const array = [...customElements, ...items.map(item => item[label])]
  return Markup.keyboard(array)
}

