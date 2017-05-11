import { HOW_MANY_CUPS, YOU_ARE_CHAMP, RECOMMENDED } from '../messages'

import log from '../../logger'

const quickReplies = [
  {
    content_type: 'text',
    title: '1-2 cups',
    payload: 'AMOUNT_1-2',
  },
  {
    content_type: 'text',
    title: '3-5 cups',
    payload: 'AMOUNT_3-5',
  },
  {
    content_type: 'text',
    title: '6 and more',
    payload: 'AMOUNT_6',
  },
  {
    content_type: 'text',
    title: 'I don\'t count',
    payload: 'AMOUNT_NA',
  },
]

export function request (reply) {
  return reply({ text: HOW_MANY_CUPS(), quick_replies: quickReplies })
}

export function set (reply, amount) {
  switch (amount) {
    case 'NA':
    case '1-2': {
      // TODO: send OOPS image
      return reply({ text: RECOMMENDED() })
    }

    case '3-5': {
      // TODO: send COOL image
      return reply({ text: RECOMMENDED() })
    }

    case '6': {
      // TODO: send champ image
      return reply({ text: YOU_ARE_CHAMP() })
    }

    default: {
      log.warn(`Unknown amount: ${amount}`)
      return false
    }
  }
}
