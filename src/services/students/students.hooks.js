const { authenticate } = require('@feathersjs/authentication').hooks
const checkBirthdate = require('../../hooks/check-birthdate')
const autoPinyin = require('../../hooks/auto-pinyin')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [autoPinyin(), checkBirthdate()],
    update: [autoPinyin(), checkBirthdate()],
    patch: [autoPinyin(), checkBirthdate()],
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
