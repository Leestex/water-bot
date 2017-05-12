import Agenda from 'agenda'
import config from 'config'

import notify from './jobs/notify'
import report from './jobs/report'
import requestSummary from './jobs/daysummary'

const agenda = new Agenda({ db: { address: config.get('database.mongodb.uri') } })

agenda.define('notify', notify)
agenda.define('report', report)
agenda.define('requestSummary', requestSummary)

export default agenda
