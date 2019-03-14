// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function () {
  return async context => {
    // since we only allow create and remove the task is simple
    // find an existing record with same pair
    const { studentId, groupId } = context.data
    const existingPair = await context.service.find({
      query: { studentId, groupId }
    })
    if (existingPair.total > 0) {
      throw new Error('This student is already in this class.')
    }
    return context
  }
}
