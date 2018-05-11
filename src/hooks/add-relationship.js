// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
// eslint-disable-next-line no-unused-vars
module.exports = function (model) {
  return async context => {
    context.params.sequelize = {
      include: [context.app.services[model].Model]
    }
    //  Nested output
    context.params.sequelize.raw = false
    return context
  }
}
