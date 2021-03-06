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
  {
    content_type: 'text',
    title: tpl.FREQUENCY_0,
    payload: 'FREQUENCY_0',
  },
]

export function request (req) {
  if (req.data === '6') {
    return req.reply({
      text: tpl.SET_DAYLY_REMINDER,
      quick_replies: quickReplies.slice(2, 3),
    })
  }

  return req.reply({
    text: tpl.CHOOSE_FREQUENCY,
    quick_replies: quickReplies.slice(0, 3),
  })
}

export function set (req) {
  req.user.set('settings.water.frequency', req.data, Number)
  req.user.save()

  return req.reply({ text: tpl.NOTED })
}

export function change (req) {
  return req.reply({
    text: tpl.CHANGE_FREQUENCY,
    quick_replies: quickReplies,
  })
}
