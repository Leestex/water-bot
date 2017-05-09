import config from 'config'

import app from './app'
import log from './modules/logger'

function onListen () {
  const host = this.address().address
  const port = this.address().port

  log.info(`[ SERVER ] HOST: ${host}`)
  log.info(`[ SERVER ] PORT: ${port}`)
}

app.listen(config.get('server.port'), onListen)
