// remove relations on join service when item is deleted
module.exports = function (serviceName, relationName) {
  return async context => {
    const { id } = context
    const query = {}
    const relation = relationName + 'Id'
    query[relation] = id
    await context.app.service(serviceName).remove(null, { query })
    return context
  }
}
