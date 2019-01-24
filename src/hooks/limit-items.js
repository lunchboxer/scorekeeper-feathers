// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (limit = 100) {
  return async context => {
    const commands = await context.app
      .service('commands')
      .find({ query: { $limit: 1, $skip: limit, $sort: { createdAt: -1 } } })
    if (commands.total <= limit) return context
    const oneExtra = commands.data[0]
    context.app.service('commands').remove(oneExtra.id)
    return context
  }
}
