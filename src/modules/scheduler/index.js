import Agenda from 'agenda'
import config from 'config'

import notify from './jobs/notify'

const agenda = new Agenda({ db: { address: config.get('database.mongodb.uri') } })

agenda.define('notify', notify)

export default agenda
