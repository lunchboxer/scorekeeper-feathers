// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function () {
  return async context => {
    const { endsAt, startsAt } = context.data
    // only update and patch will have id
    const id = context.id || null
    // check the database for all class-sessions to find if there are any overlaps.
    const startsAtConflicts = await context.app.service('class-sessions').find({
      query: {
        _id: { $ne: id },
        startsAt: { $lte: startsAt },
        endsAt: { $gte: startsAt }
      }
    })
    if (startsAtConflicts.total) {
      throw new Error('Starting time conflicts with an existing class session.')
    }
    const endsAtConflicts = await context.app.service('class-sessions').find({
      query: {
        _id: { $ne: id },
        startsAt: { $lte: endsAt },
        endsAt: { $gte: endsAt }
      }
    })
    if (endsAtConflicts.total) {
      throw new Error('Ending time conflicts with an existing class session.')
    }
    return context
  }
}
