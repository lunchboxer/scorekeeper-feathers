// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function () {
  return async context => {
    const { endsAt, startsAt } = context.data
    if (!endsAt && !startsAt) return context
    // only update and patch will have id
    const id = context.id || null
    // check the database for all class-sessions to find if there are any overlaps.
    const findConflicts = async date => {
      const conflicts = await context.app.service('sessions').find({
        query: {
          $total: 0,
          _id: { $ne: id },
          startsAt: { $lte: date },
          endsAt: { $gte: date }
        }
      })
      return conflicts.total
    }
    if (startsAt && findConflicts(startsAt)) {
      throw new Error('Starting time conflicts with an existing class session.')
    }
    if (endsAt && findConflicts(endsAt)) {
      throw new Error('Ending time conflicts with an existing class session.')
    }
    return context
  }
}
