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

  return req.reply({ text: tpl.FEATURES, quick_replies: quickReplies })
}

export async function quickReply (req) {
  switch (req.action) {
    case 'START': {
      await req.reply({ text: tpl.BEFORE_BEGIN })
      return amount.request(req)
    }
    case 'AMOUNT': {
      await amount.set(req)
      return frequency.request(req)
    }
    case 'FREQUENCY': {
      return frequency.set(req)
    }
    default: {
      log.warn(`Unknown query: ${req.query}`)
    }
  }

  return false
}

export async function defaultMessage (req) {
  return req.reply({ text: tpl.UNKNOWN_COMMAND({ user: req.user }) })
}
