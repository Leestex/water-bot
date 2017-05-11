import * as tpl from '../messages'
import * as amount from './amount'
import * as frequency from './frequency'

import log from '../../logger'

export async function start (req) {
  const { reply, user } = req

  const quickReplies = [
    {
      content_type: 'text',
      title: 'Let\'s Start',
      payload: 'START',
    },
  ]

  await reply({ text: tpl.HELLO({ user }) })
  await reply({ text: tpl.FEATURES, quick_replies: quickReplies })
}

export async function quickReply (req) {
  const { reply, query, action } = req

  switch (action) {
    case 'START': {
      await reply({ text: tpl.BEFORE_BEGIN })
      await amount.request(req)

      break
    }

    case 'AMOUNT': {
      await amount.set(req)
      await frequency.request(req)

      break
    }

    case 'FREQUENCY': {
      await frequency.set(req)

      break
    }

    default: {
      log.warn(`Unknown query: ${query}`)
    }
  }
}

export async function defaultMessage (req) {
  const { reply, user } = req

  return reply({ text: tpl.UNKNOWN_COMMAND({ user }) })
}
