/* eslin-disable no-unused-vars */
// Hooks for service `groups`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
const { authenticate } = require('@feathersjs/authentication').hooks
// !code: imports
const cleanUpM2MRelations = require('../../hooks/clean-up-m2mrelations')
// !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const { iff } = commonHooks

const {
  create,
  update,
  patch,
  validateCreate,
  validateUpdate,
  validatePatch,
} = require('./groups.validate')
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
    create: [],
    update: [],
    patch: [],
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
    remove: [cleanUpM2MRelations('group-students', 'group')],
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
