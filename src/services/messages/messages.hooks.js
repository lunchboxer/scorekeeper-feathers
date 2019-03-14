// Hooks for service `messages`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
const { authenticate } = require('@feathersjs/authentication').hooks
// eslint-disable-next-line no-unused-vars
const addTimestamp = require('./hooks/add-timestamp')
// eslint-disable-next-line no-unused-vars
const limitEntries = require('./hooks/limit-entries')
// !code: imports
/* eslint-disable no-unused-vars */
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
} = require('./messages.validate')
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
    create: [addTimestamp()],
    update: [],
    patch: [],
    remove: []
    // !end
  },

  after: {
    // !code: after
    all: [],
    find: [],
    get: [],
    create: [limitEntries()],
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
