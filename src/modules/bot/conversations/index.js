import * as tpl from '../messages'
import * as amount from './amount'
import * as frequency from './frequency'
import * as reminder from './reminder'

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
      if (req.data === '0') {
        return frequency.set(req)
      }
      await frequency.set(req)
      return reminder.initialRequest(req)
    }
    case 'DRANK': {
      return reminder.accepted(req)
    }
    case 'TODAY': {
      return reminder.setSummary(req)
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
