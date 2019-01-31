const checkScheduleConflicts = require('../../hooks/check-schedule-conflicts')
const { authenticate } = require('@feathersjs/authentication').hooks
const sanityCheckSessionDates = require('../../hooks/check-session-dates-within-year')
const checkSessionEndsAfterStart = require('../../hooks/check-session-ends-after-start')

const occursDuringSemester = require('../../hooks/occurs-during-semester')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      checkScheduleConflicts(),
      sanityCheckSessionDates(),
      checkSessionEndsAfterStart(),
      occursDuringSemester()
    ],
    update: [
      checkScheduleConflicts(),
      sanityCheckSessionDates(),
      checkSessionEndsAfterStart(),
      occursDuringSemester()
    ],
    patch: [
      checkScheduleConflicts(),
      sanityCheckSessionDates(),
      checkSessionEndsAfterStart(),
      occursDuringSemester()
    ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
