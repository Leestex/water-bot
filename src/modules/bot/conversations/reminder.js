import moment from 'moment'

import * as tpl from '../messages'
import { Image } from '../../image'
import bot from '../index'

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

export async function remind (user) {
  await Image.send(bot.sendMessage.bind(bot, user.fbid), 'water')

  return bot.sendMessage(user.fbid, {
    text: tpl.WATER_TIME,
    quick_replies: notificationQuickReplies,
  })
}

export async function report (user) {
  // Report placeholder
}

export function requestSummary (user) {
  return bot.sendMessage(user.fbid, {
    text: tpl.HOW_MANY_GLASSES_TODAY({ user }),
    quick_replies: summaryQuickReplies,
  })
}

export function setSummary (req) {
  req.user.records.push({ day: moment().utc().format('YYYY-MM-DD'), amount: Number(req.data) })
  req.user.save()

  return req.reply({
    text: tpl.PROGRESS_SAVED,
  })
}
