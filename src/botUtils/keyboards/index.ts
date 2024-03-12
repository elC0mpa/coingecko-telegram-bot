import { Markup } from 'telegraf'
import { UserInteractionConstants } from '../constants'

export const MainMenuKeyboard = Markup.keyboard([
  [UserInteractionConstants.COINS_DATA_ACTION],
  [UserInteractionConstants.TRENDING_ACTION],
])

export const NoKeyboard = Markup.removeKeyboard()

export const createSelectByLabelKeyboard = (items: any[], label: string, customElements: any[] = []) => {
  const array = [...customElements, ...items.map(item => item[label])]
  return Markup.keyboard(array)
}

