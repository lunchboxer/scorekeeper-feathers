const { authenticate } = require('@feathersjs/authentication').hooks
const semesterEndsAfterStart = require('../../hooks/semester-ends-after-start')
const semesterDateConflicts = require('../../hooks/semester-date-conflicts')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [semesterEndsAfterStart(), semesterDateConflicts()],
    update: [semesterEndsAfterStart(), semesterDateConflicts()],
    patch: [semesterEndsAfterStart(), semesterDateConflicts()],
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
