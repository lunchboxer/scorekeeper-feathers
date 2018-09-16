// Initializes the `points` service on path `/points`
const createService = require('feathers-sequelize')
const createModel = require('../../models/points.model')
const hooks = require('./points.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = { default: 100, max: 500 }

  const options = {
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/points', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('points')

  service.hooks(hooks)
}
