import Bot from 'messenger-bot'
import config from 'config'

import { start, quickReply, defaultMessage } from './conversations'

const bot = new Bot({
  verify: config.get('facebook.verifyToken'),
  token: config.get('facebook.accessToken'),
  app_secret: config.get('facebook.appSecret'),
})

bot.on('message', async (payload, reply) => {
  const profile = await bot.getProfile(payload.sender.id)

  if (payload.message.text === 'Start') {
    return start(reply, profile)
  }

  if (payload.message.quick_reply) {
    return quickReply(reply, payload.message.quick_reply.payload, payload)
  }

  return defaultMessage(reply, profile)
})

export default bot
