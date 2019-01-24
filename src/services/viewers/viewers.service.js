// Initializes the `viewer` service on path `/viewer`
const createService = require('feathers-sequelize')
const createModel = require('../../models/viewers.model')
const hooks = require('./viewers.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/viewers', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('viewers')

  service.hooks(hooks)
}
