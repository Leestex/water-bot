import { CHOOSE_FREQUENCY, NOTED } from '../messages'

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
  return reply({ text: CHOOSE_FREQUENCY(), quick_replies: quickReplies })
}

export function set (reply, frequency) {
  return reply({ text: NOTED() })
}
