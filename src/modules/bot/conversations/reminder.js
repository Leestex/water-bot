import * as tpl from '../messages'
import { Image } from '../../image'

const notificationQuickReplies = [
  {
    content_type: 'text',
    title: tpl.DONE,
    payload: 'DRANK',
  },
]

const summaryQuickReplies = [
  {
    content_type: 'text',
    title: '1-2',
    payload: 'TODAY_2',
  },
  {
    content_type: 'text',
    title: '3-5',
    payload: 'TODAY_4',
  },
  {
    content_type: 'text',
    title: '6-8',
    payload: 'TODAY_7',
  },
  {
    content_type: 'text',
    title: '8+',
    payload: 'TODAY_8',
  },
]

export function initialRequest (req) {
  return req.reply({
    text: tpl.LETS_TRY,
    quick_replies: notificationQuickReplies,
  })
}

export async function accepted (req) {
  await Image.send(req.reply, 'champ')

  return req.reply({
    text: tpl.WELL_DONE({ user: req.user }),
  })
}

export async function remind (req) {
  await Image.send(req.reply, 'water')

  return req.reply({
    text: tpl.WATER_TIME,
    quick_replies: notificationQuickReplies,
  })
}

export function requestSummary (req) {
  return req.reply({
    text: tpl.HOW_MANY_GLASSES_TODAY({ user: req.user }),
    quick_replies: summaryQuickReplies,
  })
}

export function setSummary (req) {
  return req.reply({
    text: tpl.PROGRESS_SAVED,
  })
}
