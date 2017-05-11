import Bot from 'messenger-bot'
import config from 'config'

import { User } from '../user'
import { start, quickReply, defaultMessage } from './conversations'

const bot = new Bot({
  verify: config.get('facebook.verifyToken'),
  token: config.get('facebook.accessToken'),
  app_secret: config.get('facebook.appSecret'),
})

bot.on('message', async (payload, reply) => {
  const user = await User.findOneOrCreate(payload.sender.id, bot)

  if (payload.message.text === 'Start') {
    return start(reply, user)
  }

  if (payload.message.quick_reply) {
    return quickReply(reply, payload.message.quick_reply.payload, payload)
  }

  return defaultMessage(reply, user)
})

export default bot
