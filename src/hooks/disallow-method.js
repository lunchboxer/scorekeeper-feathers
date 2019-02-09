const errors = require('@feathersjs/errors')

module.exports = function () {
  return context => {
    throw new errors.MethodNotAllowed('Method not allowed')
  }
}
