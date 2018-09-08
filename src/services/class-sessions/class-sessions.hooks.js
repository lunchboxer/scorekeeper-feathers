const { authenticate } = require('@feathersjs/authentication').hooks
const checkScheduleConflicts = require('../../hooks/check-schedule-conflicts')
const sanityCheckSessionDates = require('../../hooks/check-session-dates-within-year')

const checkSessionEndsAfterStart = require('../../hooks/check-session-ends-after-start')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      checkScheduleConflicts(),
      sanityCheckSessionDates(),
      checkSessionEndsAfterStart()
    ],
    update: [
      checkScheduleConflicts(),
      sanityCheckSessionDates(),
      checkSessionEndsAfterStart()
    ],
    patch: [
      checkScheduleConflicts(),
      sanityCheckSessionDates(),
      checkSessionEndsAfterStart()
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
