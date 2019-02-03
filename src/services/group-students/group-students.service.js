// Initializes the `groupStudents` service on path `/group-students`. (Can be re-generated.)
const createService = require('feathers-mongoose')
const createModel = require('../../models/group-students.model')
const hooks = require('./group-students.hooks')
// !code: imports // !end
// !code: init // !end

let moduleExports = function (app) {
  let Model = createModel(app)
  let paginate = app.get('paginate')
  // !code: func_init // !end

  let options = {
    Model,
    multi: true,
    paginate,
    // !code: options_more // !end
  }
  // !code: options_change // !end

  // Initialize our service with any options it requires
  app.use('/group-students', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('group-students')

  service.hooks(hooks)
  // !code: func_return // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
