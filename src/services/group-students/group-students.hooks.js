
// Hooks for service `groupStudents`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
const { authenticate } = require('@feathersjs/authentication').hooks
// eslint-disable-next-line no-unused-vars
const disallowMethod = require('../../hooks/disallow-method')
// eslint-disable-next-line no-unused-vars
const noDuplicatePairs = require('./hooks/no-duplicate-pairs')
// eslint-disable-next-line no-unused-vars
const oneGroupPerStudentPerSemester = require('./hooks/one-group-per-student-per-semester')
// !code: imports
/* eslint-disable no-unused-vars */
// !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const { iff } = commonHooks
// eslint-disable-next-line no-unused-vars
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = require('./group-students.validate')
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
    create: [
      validateCreate(),
      noDuplicatePairs(),
      oneGroupPerStudentPerSemester(),
    ],
    update: [disallowMethod()],
    patch: [disallowMethod()],
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
  },
  // !code: moduleExports // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
