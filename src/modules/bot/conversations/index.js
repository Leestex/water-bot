import * as tpl from '../messages'
import * as amount from './amount'
import * as frequency from './frequency'

import log from '../../logger'

export async function start (reply, profile) {
  const quickReplies = [
    {
      content_type: 'text',
      title: 'Let\'s Start',
      payload: 'START',
    },
  ]

  await reply({ text: tpl.HELLO({ profile }) })
  await reply({ text: tpl.FEATURES, quick_replies: quickReplies })
}

export async function quickReply (reply, query, payload) {
  const [action, data] = query.split('_')

  switch (action) {
    case 'START': {
      await reply({ text: tpl.BEFORE_BEGIN })
      await amount.request(reply)

      break
    }

    case 'AMOUNT': {
      await amount.set(reply, data)
      await frequency.request(reply, data)

      break
    }

    case 'FREQUENCY': {
      await frequency.set(reply, data)

      break
    }

    default: {
      log.warn(`Unknown query: ${query}`)
    }
  }
}

export async function defaultMessage (reply, profile) {
  return reply({ text: tpl.UNKNOWN_COMMAND({ profile }) })
}
