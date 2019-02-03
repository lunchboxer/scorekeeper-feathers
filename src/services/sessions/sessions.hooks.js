// Hooks for service `sessions`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
const { authenticate } = require('@feathersjs/authentication').hooks
// !code: imports
const occursDuringSemester = require('./hooks/occurs-during-semester')
const checkScheduleConflicts = require('./hooks/check-schedule-conflicts')
const checkSessionDatesWithinYear = require('./hooks/check-session-dates-within-year')
const checkSessionEndsAfterStarts = require('./hooks/check-session-ends-after-start')
// !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const { iff } = commonHooks
// eslint-disable-next-line no-unused-vars
const {
  create,
  update,
  patch,
  validateCreate,
  validateUpdate,
  validatePatch,
} = require('./sessions.validate')
// !end

// !code: init // !end

let moduleExports = {
  before: {
    // Your hooks should include:
    //   all   : authenticate('jwt')
    // !<DEFAULT> code: before
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [
      validateCreate(),
      checkSessionDatesWithinYear(),
      checkSessionEndsAfterStarts(),
      occursDuringSemester(),
      checkScheduleConflicts(),
    ],
    update: [
      validateUpdate(),
      checkSessionDatesWithinYear(),
      checkSessionEndsAfterStarts(),
      occursDuringSemester(),
      checkScheduleConflicts(),
    ],
    patch: [
      validatePatch(),
      checkSessionDatesWithinYear(),
      checkSessionEndsAfterStarts(),
      occursDuringSemester(),
      checkScheduleConflicts(),
    ],
    remove: [],
    // !end
  },

  after: {
    // !<DEFAULT> code: after
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
    // !end
  },

  error: {
    // !<DEFAULT> code: error
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
    // !end
  },
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
