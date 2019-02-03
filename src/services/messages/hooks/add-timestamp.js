// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function () {
  // Return the actual hook.
  return async context => {
    context.data.timestamp = new Date()
    return context
  }
}
