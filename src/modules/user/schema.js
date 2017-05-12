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
  timezone: {
    type: Number,
    required: true,
  },
  settings: {
    water: {
      amount: String,
      frequency: Number,
    },
  },
  records: [{
    day: String,
    amount: Number,
  }],
})
