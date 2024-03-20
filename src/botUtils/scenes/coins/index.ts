import { Markup, Scenes } from 'telegraf'
import { message } from 'telegraf/filters'
import { MainMenuKeyboard, NoKeyboard } from '../../keyboards'
import { SceneIDS } from '../../constants'

export const coinDataWizard = new Scenes.WizardScene(
  SceneIDS.COIN_DATA,
  async ctx => {
    ctx.reply(
      'Por favor inserte el nombre de la criptomoneda que quiere inspeccionar\nNo tiene que insertar el nombre completamente',
      NoKeyboard
    )
    return ctx.wizard.next()
  },
  async ctx => {
    if (!ctx.has(message('text'))) {
      ctx.reply('Por favor inserte un texto')
      return
    }
    //Pedir datos al API
    ctx.reply('Por favor seleccione una de las criptomonedas en el teclado', Markup.keyboard(['bitcoin', 'ethereum']))
    return ctx.wizard.next()
  },
  async ctx => {
    if (!ctx.has(message('text'))) {
      ctx.reply('Por favor inserte un texto')
      return
    }
    //Pedir datos al API
    ctx.reply(`Usted seleccionó la cripto ${ctx.message.text}`, MainMenuKeyboard)
    return ctx.scene.leave()
  }
)
