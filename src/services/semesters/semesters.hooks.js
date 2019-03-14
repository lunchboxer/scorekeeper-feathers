// Hooks for service `semesters`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
const { authenticate } = require('@feathersjs/authentication').hooks
// !code: imports
/* eslint-disable no-unused-vars */
const dateConflicts = require('./hooks/date-conflicts')
const mustEndAfterStarts = require('./hooks/must-end-after-starts')
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
  validatePatch
} = require('./semesters.validate')
// !end

// !code: init // !end

let moduleExports = {
  before: {
    // Your hooks should include:
    //   all   : authenticate('jwt')
    // !code: before
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [mustEndAfterStarts(), dateConflicts()],
    update: [mustEndAfterStarts(), dateConflicts()],
    patch: [mustEndAfterStarts(), dateConflicts()],
    remove: []
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
    remove: []
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
    remove: []
    // !end
  }
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
