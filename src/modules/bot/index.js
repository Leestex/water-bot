import Bot from 'messenger-bot'
import config from 'config'

import { start, quickReply, defaultMessage } from './conversations'
import { getRequestFromPayload } from './request'
import { threadState, callToActions } from './menu'

import agenda from '../scheduler'
import log from '../logger'

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

bot.on('postback', async (payload, reply) => {
  const request = await getRequestFromPayload(payload, reply, bot)

  if (payload.postback.payload === 'START') {
    return start(request)
  }

  return defaultMessage(request)
})

agenda.on('error', err => log.error(err))
agenda.on('ready', () => {
  agenda.every('1 hour', 'notify')

  agenda.start()
})

export default bot
