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
  const { reply } = req

  return reply({ text: tpl.HOW_MANY_CUPS, quick_replies: quickReplies })
}

export function set (req) {
  const { reply, user, data: amount } = req

  user.set('settings.water.amount', amount)
  user.save()

  switch (amount) {
    case 'NA':
    case '1-2': {
      // TODO: send OOPS image
      return reply({ text: tpl.RECOMMENDED })
    }

    case '3-5': {
      // TODO: send COOL image
      return reply({ text: tpl.RECOMMENDED })
    }

    case '6': {
      // TODO: send champ image
      return reply({ text: tpl.YOU_ARE_CHAMP })
    }

    default: {
      log.warn(`Unknown amount: ${amount}`)
      return false
    }
  }
}
