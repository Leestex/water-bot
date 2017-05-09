import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()

app.use(helmet())
app.use(morgan('tiny'))
app.use(bodyParser.json())

export default app
