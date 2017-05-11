import express from 'express'

import { validate, subscribe, receivedUpdate } from '../modules/webhook'

const router = express.Router()

router.use('/static', express.static('public'))
router.get('/', validate, subscribe)
router.post('/', receivedUpdate)

export default router
