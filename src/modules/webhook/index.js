import config from 'config'

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