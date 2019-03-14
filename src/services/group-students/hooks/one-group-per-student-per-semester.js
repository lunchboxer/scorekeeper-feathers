module.exports = function () {
  return async context => {
    const { groupId, studentId } = context.data
    const { semesterId } = await context.app.service('groups').get(groupId)
    const sameSemGroups = await context.app.service('groups').find({
      query: {
        semesterId,
        $limit: 100,
        $select: ['_id'],
        _id: { $ne: groupId }
      }
    })
    if (sameSemGroups.total === 0) return context
    // now for each of these groups search this service and see if we find the same studuent
    const groupsArray = sameSemGroups.data.map(group => group._id)
    const sameSemGroupsStudents = await context.service.find({
      query: { $limit: 0, groupId: { $in: groupsArray }, studentId }
    })
    if (sameSemGroupsStudents.total > 0) {
      throw new Error('Student can only be in one class per semester.')
    }
    return context
  }
}
