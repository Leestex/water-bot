import { CHOOSE_FREQUENCY, SET_DAYLY_REMINDER, NOTED } from '../messages'

const quickReplies = [
  {
    content_type: 'text',
    title: '3 times a day',
    payload: 'FREQUENCY_3',
  },
  {
    content_type: 'text',
    title: 'Twice a day',
    payload: 'FREQUENCY_2',
  },
  {
    content_type: 'text',
    title: 'Once a day',
    payload: 'FREQUENCY_1',
  },
]

export function request (reply, amount) {
  if (amount === '6') {
    return reply({ text: SET_DAYLY_REMINDER(), quick_replies: quickReplies.slice(-1) })
  }

  return reply({ text: CHOOSE_FREQUENCY(), quick_replies: quickReplies })
}

export function set (reply, frequency) {
  return reply({ text: NOTED() })
}
