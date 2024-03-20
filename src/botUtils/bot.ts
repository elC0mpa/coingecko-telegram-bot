import { Telegraf, Scenes, session } from 'telegraf'
import { SceneIDS, UserInteractionConstants } from './constants'
import { MainMenuKeyboard } from './keyboards'
import {coinDataWizard} from './scenes/coins'

const initBot = () => {
  const bot = new Telegraf(process.env.BOT_TOKEN)
  const wizardsStage = new Scenes.Stage<any>([])

  // bot.use(checkUserType)
  // bot.use(allowedUsers)

  wizardsStage.register(coinDataWizard)

  bot.start(ctx => {
    ctx.reply('Menú Principal', MainMenuKeyboard)
  })
  wizardsStage.hears(UserInteractionConstants.CRYPTO_ACTION, ctx => {
    ctx.scene.enter(SceneIDS.COIN_DATA)
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
