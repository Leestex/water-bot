import { User } from '../../user'

export function parseQuery (query) {
  const [action, data] = query.split('_')

  return { action, data }
}

export async function getRequestFromPayload (payload, reply, bot) {
  const request = {}

  const user = await User.findOneOrCreate(payload.sender.id, bot)

  Object.assign(request, { user, payload, reply })

  if (payload.message && payload.message.quick_reply) {
    request.query = payload.message.quick_reply.payload
    Object.assign(request, parseQuery(request.query))
  }

  return request
}
