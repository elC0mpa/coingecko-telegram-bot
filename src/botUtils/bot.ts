import { Telegraf, Scenes, session } from 'telegraf'
import { UserInteractionConstants } from './constants'
import { MainMenuKeyboard } from './keyboards'
import { initCoinsRoutes } from './routes/coins'

const initBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN)
  const wizardsStage = new Scenes.Stage<any>([])

  // bot.use(checkUserType)
  // bot.use(allowedUsers)

  bot.start(ctx => {
    ctx.reply('Menú Principal', MainMenuKeyboard)
  })
  initCoinsRoutes(bot, wizardsStage)

  bot.use(session())
  bot.use(wizardsStage.middleware())

  bot.hears(UserInteractionConstants.MAIN_MENU, ctx => {
    ctx.reply('Menú Principal', MainMenuKeyboard)
  })
  const launchOptions = {}
  bot.launch(launchOptions)
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}
export { initBot }
