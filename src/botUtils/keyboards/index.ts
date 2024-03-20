import { Markup } from 'telegraf'
import { UserInteractionConstants } from '../constants'

export const MainMenuKeyboard = Markup.keyboard([
  [UserInteractionConstants.CRYPTO_ACTION],
  [UserInteractionConstants.TRENDING_ACTION],
])

export const NoKeyboard = Markup.removeKeyboard()
