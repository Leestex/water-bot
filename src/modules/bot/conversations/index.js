import * as tpl from '../messages'
import * as amount from './amount'
import * as frequency from './frequency'

import log from '../../logger'

export async function start (req) {
  const quickReplies = [
    {
      content_type: 'text',
      title: 'Let\'s Start',
      payload: 'START',
    },
  ]

  await req.reply({ text: tpl.HELLO({ user: req.user }) })
  await req.reply({ text: tpl.FEATURES, quick_replies: quickReplies })
}

export async function quickReply (req) {
  switch (req.action) {
    case 'START': {
      await req.reply({ text: tpl.BEFORE_BEGIN })
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
      log.warn(`Unknown query: ${req.query}`)
    }
  }
}

export async function defaultMessage (req) {
  return req.reply({ text: tpl.UNKNOWN_COMMAND({ user: req.user }) })
}
