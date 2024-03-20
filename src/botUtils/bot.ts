import { Telegraf, Scenes, session } from 'telegraf'
import { UserInteractionConstants } from './constants'
import { MainMenuKeyboard } from './keyboards'

const initBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN)
  const wizardsStage = new Scenes.Stage<any>([])

  // bot.use(checkUserType)
  // bot.use(allowedUsers)

  bot.start(ctx => {
    ctx.reply('Menú Principal', MainMenuKeyboard)
  })
  bot.hears(UserInteractionConstants.CRYPTO_ACTION, ctx => {
    ctx.reply('Se presionó el 1er botón del teclado')
  })
  bot.hears(UserInteractionConstants.TRENDING_ACTION, ctx => {
    ctx.reply('Se presionó el 2do botón del teclado')
  })
  bot.use(session())
  bot.use(wizardsStage.middleware())
  const launchOptions = {}
  bot.launch(launchOptions)
  process.once('SIGINT', () => bot.stop('SIGINT'))
  process.once('SIGTERM', () => bot.stop('SIGTERM'))
}
export { initBot }
