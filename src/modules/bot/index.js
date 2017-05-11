import Bot from 'messenger-bot'
import config from 'config'

import { start, quickReply, defaultMessage } from './conversations'
import { getRequestFromPayload } from './request'
import { threadState, callToActions } from './menu'

const bot = new Bot({
  verify: config.get('facebook.verifyToken'),
  token: config.get('facebook.accessToken'),
  app_secret: config.get('facebook.appSecret'),
})

bot.setThreadSettings(threadState, callToActions)

bot.on('message', async (payload, reply) => {
  const request = await getRequestFromPayload(payload, reply, bot)

  if (payload.message.text === 'Start') {
    return start(request)
  }

  if (payload.message.quick_reply) {
    return quickReply(request)
  }

  return defaultMessage(request)
})

export default bot
