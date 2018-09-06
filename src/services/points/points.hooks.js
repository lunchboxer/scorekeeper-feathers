const { authenticate } = require('@feathersjs/authentication').hooks

const limitValues = require('../../hooks/limit-values');

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [limitValues()],
    update: [limitValues()],
    patch: [limitValues()],
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
