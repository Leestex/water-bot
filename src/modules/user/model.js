import mongoose from 'mongoose'

import schema from './schema'

class User {

  static async findOneOrCreate (fbid, bot) {
    let user = await this.findOne({ fbid })

    if (!user) {
      const profile = await bot.getProfile(fbid)
      user = await this.create({ fbid, name: profile.first_name, timezone: profile.timezone })
    }

    return user
  }

}

schema.index({ fbid: 1 })
schema.loadClass(User)

export default mongoose.model('User', schema)
