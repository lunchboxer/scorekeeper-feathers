// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (limit = 100) {
  return async context => {
    const items = await context.app
      .service(context.path)
      .find({ query: { $limit: 1, $skip: limit, $sort: { createdAt: -1 } } })
    if (items.total <= limit) return context
    const oneExtra = items.data[0]
    context.app.service(context.path).remove(oneExtra.id)
    return context
  }
}
