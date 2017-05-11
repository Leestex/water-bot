import Bot from 'messenger-bot'
import config from 'config'

import { User } from '../user'
import { start, quickReply, defaultMessage } from './conversations'

const bot = new Bot({
  verify: config.get('facebook.verifyToken'),
  token: config.get('facebook.accessToken'),
  app_secret: config.get('facebook.appSecret'),
})

function parseQuery (query) {
  const [action, data] = query.split('_')

  return { action, data }
}

async function getRequestFromPayload (payload, reply) {
  const request = {}

  const user = await User.findOneOrCreate(payload.sender.id, bot)

  Object.assign(request, { user, payload, reply })

  if (payload.message.quick_reply) {
    request.query = payload.message.quick_reply.payload
    Object.assign(request, parseQuery(request.query))
  }

  console.log('request', request)

  return request
}

bot.on('message', async (payload, reply) => {
  const request = await getRequestFromPayload(payload, reply)

  if (payload.message.text === 'Start') {
    return start(request)
  }

  if (payload.message.quick_reply) {
    return quickReply(request)
  }

  return defaultMessage(request)
})

export default bot
