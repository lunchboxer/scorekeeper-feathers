const { authenticate } = require('@feathersjs/authentication').hooks
const addRelationship = require('./../../hooks/add-relationship')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [addRelationship('student')],
    get: [addRelationship('student')],
    create: [],
    update: [],
    patch: [],
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
