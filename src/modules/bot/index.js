import Botkit from 'botkit'
import config from 'config'

export const controller = Botkit.facebookbot({
  debug: true,
  verify_token: config.get('facebook.verifyToken'),
  access_token: config.get('facebook.accessToken'),
})

export const bot = controller.spawn({})
