// Initializes the `studentGroups` service on path `/student-groups`
const createService = require('feathers-sequelize')
const createModel = require('../../models/student-groups.model')
const hooks = require('./student-groups.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'student-groups',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/student-groups', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('student-groups')

  service.hooks(hooks)
}
