// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return async context => {
    const { endDate, startDate } = context.data
    // only update and patch will have id
    const id = context.id || null
    // check the database to find if there are any overlaps.
    const startDateConflicts = await context.service.find({
      query: {
        _id: { $ne: id },
        startDate: { $lte: startDate },
        endDate: { $gte: startDate }
      }
    })
    if (startDateConflicts.total) {
      throw new Error('Start date conflicts with an existing semester.')
    }
    const endDateConflicts = await context.service.find({
      query: {
        _id: { $ne: id },
        startDate: { $lte: endDate },
        endDate: { $gte: endDate }
      }
    })
    if (endDateConflicts.total) {
      throw new Error('End date conflicts with an existing semester.')
    }
    return context
  }
}
