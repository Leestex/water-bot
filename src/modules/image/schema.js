import { Schema } from 'mongoose'

export default Schema({
  fbid: {
    type: Number,
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
