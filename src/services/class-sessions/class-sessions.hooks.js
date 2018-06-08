const { authenticate } = require('@feathersjs/authentication').hooks
const checkScheduleConflicts = require('./../../hooks/check-schedule-conflicts')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [checkScheduleConflicts()],
    update: [checkScheduleConflicts()],
    patch: [checkScheduleConflicts()],
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
