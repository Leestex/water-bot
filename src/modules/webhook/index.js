import config from 'config'
import crypto from 'crypto'

import bot from '../bot'

export function validate (req, res, next) {
  if (req.query['hub.mode'] === 'subscribe' && req.query['hub.verify_token']) {
    next()
  } else {
    res.sendStatus(403)
  }
}

export function subscribe (req, res) {
  if (req.query['hub.verify_token'] === config.get('facebook.verifyToken')) {
    res.status(200)
    res.send(req.query['hub.challenge'])
  } else {
    res.sendStatus(403)
  }
}

export function receivedUpdate (req, res) {
  bot._handleMessage(req.body)
  res.sendStatus(200)
}

function getHash (buf) {
  return crypto.createHmac('sha1', config.get('facebook.appSecret'))
    .update(buf)
    .digest('hex')
}

export function verify (req, res, buf) {
  const signature = req.headers['x-hub-signature']
  const [method, hash] = signature.split('=')

  if (!signature || hash !== getHash(buf)) {
    throw new Error('Invalid signature')
  }
}
