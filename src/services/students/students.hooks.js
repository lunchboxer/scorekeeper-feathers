
// Hooks for service `students`. (Can be re-generated.)
const commonHooks = require('feathers-hooks-common')
const { authenticate } = require('@feathersjs/authentication').hooks
// !code: imports
/* eslint-disable no-unused-vars */
const notSuperOldOrUnborn = require('./hooks/not-super-old-or-unborn')
const cleanUpM2MRelations = require('../../hooks/clean-up-m2mrelations')
const autoPinyin = require('./hooks/auto-pinyin')
// !end

// !<DEFAULT> code: used
// eslint-disable-next-line no-unused-vars
const { iff } = commonHooks
// eslint-disable-next-line no-unused-vars
const { create, update, patch, validateCreate, validateUpdate, validatePatch } = require('./students.validate')
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
    create: [validateCreate(), notSuperOldOrUnborn(), autoPinyin()],
    update: [notSuperOldOrUnborn(), autoPinyin()],
    patch: [notSuperOldOrUnborn(), autoPinyin()],
    remove: []
    // !end
  },

  after: {
    // !code: after
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [cleanUpM2MRelations('group-students', 'student')]
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
