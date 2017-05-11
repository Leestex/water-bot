import { Schema } from 'mongoose'

export default Schema({
  fbid: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  settings: {
    water: {
      amount: String,
      frequency: String,
    },
  },
})
