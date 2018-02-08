const autoPinyin = require('../../hooks/auto-pinyin')
const validateBirthdate = require('../../hooks/validate-birthdate')
const { authenticate } = require('@feathersjs/authentication').hooks

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [autoPinyin(), validateBirthdate()],
    update: [autoPinyin(), validateBirthdate()],
    patch: [validateBirthdate()],
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
