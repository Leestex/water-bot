import moment from 'moment'

import { User } from '../../user'
import { remind } from '../../bot/conversations/reminder'
import log from '../../logger'

export default async function notify (job, done) {
  try {
    const utcHours = moment().utc().hours()
    const timezone = time => time - utcHours

    const users = await User.find({
      $or: [
        { 'settings.water.frequency': 1, timezone: timezone(12) },
        { 'settings.water.frequency': 2, timezone: [timezone(12), timezone(17)] },
        { 'settings.water.frequency': 3, timezone: [timezone(7), timezone(12), timezone(17)] },
      ],
    })

    if (!users.length) {
      return done()
    }

    await Promise.all(users.map(remind))
  } catch (err) {
    log.error(err)
  }

  return done()
}
