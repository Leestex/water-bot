import mongoose from 'mongoose'

import schema from './schema'

const IMAGES = {
  oops: '',
  cool: '',
  champ: '',
}

class Image {

  static async send (reply, name) {
    if (!IMAGES[name]) {
      return false
    }

    const image = await this.findOne({ name })

    if (image && image.fbid) {
      return reply({
        attachment: {
          type: 'image',
          payload: {
            attachment_id: image.fbid,
          },
        },
      })
    }

    const response = await reply({
      attachment: {
        type: 'image',
        payload: {
          url: IMAGES[name],
          is_reusable: true,
        },
      },
    })

    console.log('IMAGE', response)

    if (image) {
      image.set('fbid', response.attachment_id)
      image.save()
    } else {
      this.create({ name, fbid: response.attachment_id })
    }

    return response
  }

}

schema.index({ name: 1 })
schema.loadClass(Image)

export default mongoose.model('Image', schema)
