import express from 'express'

import { validate, subscribe } from '../modules/webhook'

const router = express.Router()

router.get('/', validate, subscribe)

export default router
