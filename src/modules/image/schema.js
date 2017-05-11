import { Schema } from 'mongoose'

export default Schema({
  fbid: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  originalURL: {
    type: String,
    required: true,
  },
})
