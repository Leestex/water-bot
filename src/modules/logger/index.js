import winston from 'winston'
import config from 'config'

const logger = new winston.Logger({
  level: config.get('logs.level'),
  transports: [
    new winston.transports.Console({ colorize: true }),
  ],
})

logger.stream = {
  write (message) {
    logger.debug(message)
  },
}

export default logger
