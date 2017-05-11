import * as tpl from '../messages'

import log from '../../logger'

const quickReplies = [
  {
    content_type: 'text',
    title: tpl.AMOUNT_1_2,
    payload: 'AMOUNT_1-2',
  },
  {
    content_type: 'text',
    title: tpl.AMOUNT_3_5,
    payload: 'AMOUNT_3-5',
  },
  {
    content_type: 'text',
    title: tpl.AMOUNT_6,
    payload: 'AMOUNT_6',
  },
  {
    content_type: 'text',
    title: tpl.AMOUNT_NA,
    payload: 'AMOUNT_NA',
  },
]

export function request (req) {
  return req.reply({ text: tpl.HOW_MANY_CUPS, quick_replies: quickReplies })
}

export function set (req) {
  req.user.set('settings.water.amount', req.data)
  req.user.save()

  switch (req.data) {
    case 'NA':
    case '1-2': {
      // TODO: send OOPS image
      return req.reply({ text: tpl.RECOMMENDED })
    }
    case '3-5': {
      // TODO: send COOL image
      return req.reply({ text: tpl.RECOMMENDED })
    }
    case '6': {
      // TODO: send champ image
      return req.reply({ text: tpl.YOU_ARE_CHAMP })
    }
    default: {
      log.warn(`Unknown amount: ${req.data}`)
      return false
    }
  }
}
