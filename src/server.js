import config from 'config'
import mongoose from 'mongoose'
import Promise from 'bluebird'

import app from './app'
import log from './modules/logger'

mongoose.Promise = Promise

function onConnected () {
  mongoose.connections.forEach(connection => {
    log.info(`[ MONGODB ] HOST: ${connection.host}`)
    log.info(`[ MONGODB ] PORT: ${connection.port}`)
    log.info(`[ MONGODB ] DB: ${connection.name}`)
  })
}

function onListen () {
  const host = this.address().address
  const port = this.address().port

  log.info(`[ SERVER ] HOST: ${host}`)
  log.info(`[ SERVER ] PORT: ${port}`)
}

mongoose.connect(config.get('database.mongodb.uri'), onConnected)

app.listen(config.get('server.port'), onListen)
