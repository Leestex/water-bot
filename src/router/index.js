import express from 'express'

import { validate, subscribe, receivedUpdate } from '../modules/webhook'

const router = express.Router()

router.get('/', validate, subscribe)
router.post('/', receivedUpdate)

export default router
