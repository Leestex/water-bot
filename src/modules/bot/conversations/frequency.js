import * as tpl from '../messages'

const quickReplies = [
  {
    content_type: 'text',
    title: tpl.FREQUENCY_3,
    payload: 'FREQUENCY_3',
  },
  {
    content_type: 'text',
    title: tpl.FREQUENCY_2,
    payload: 'FREQUENCY_2',
  },
  {
    content_type: 'text',
    title: tpl.FREQUENCY_1,
    payload: 'FREQUENCY_1',
  },
]

export function request (reply, amount) {
  if (amount === '6') {
    return reply({ text: tpl.SET_DAYLY_REMINDER, quick_replies: quickReplies.slice(-1) })
  }

  return reply({ text: tpl.CHOOSE_FREQUENCY, quick_replies: quickReplies })
}

export function set (reply, frequency) {
  return reply({ text: tpl.NOTED })
}
