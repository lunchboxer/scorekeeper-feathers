// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (limit = 20) {
  return async context => {
    const items = await context.service.find({
      query: { $limit: 1, $skip: limit, $sort: { timestamp: -1 } }
    })
    if (items.total <= limit) return context
    const oneExtra = items.data[0]
    context.service.remove(oneExtra.id)
    return context
  }
}
