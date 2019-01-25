const { authenticate } = require('@feathersjs/authentication').hooks
const limitItems = require('../../hooks/limit-items')
const addCreatedAt = require('../../hooks/add-created-at')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [addCreatedAt()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [limitItems(20)],
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
