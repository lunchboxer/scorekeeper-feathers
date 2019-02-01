const { authenticate } = require('@feathersjs/authentication').hooks
const checkBirthdate = require('../../hooks/check-birthdate')
const autoPinyin = require('../../hooks/auto-pinyin')
const oneGroupPerSemPerStudent = require('../../hooks/one-group-per-sem-per-student')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [autoPinyin(), checkBirthdate()],
    update: [autoPinyin(), checkBirthdate(), oneGroupPerSemPerStudent()],
    patch: [autoPinyin(), checkBirthdate(), oneGroupPerSemPerStudent()],
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
