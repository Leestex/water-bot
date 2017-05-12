import moment from 'moment'

import { User } from '../../user'
import { report } from '../../bot/conversations/reminder'
import log from '../../logger'

export default async function notify (job, done) {
  try {
    const utcHours = moment().utc().hours()
    const timezone = 20 - utcHours

    const users = await User.find({ 'settings.water.frequency': { $ne: 0 }, timezone })

    if (!users.length) {
      return done()
    }

    await Promise.all(users.map(report))
  } catch (err) {
    log.error(err)
  }

  return done()
}
