// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
module.exports = function () {
  return async context => {
    // search semesters for one that includes the dates of the class session,
    // if not found throw error.

    const { endsAt, startsAt } = context.data
    if (!endsAt && !startsAt) return context

    const sameTimeSemesters = async date => {
      const startsinSemester = await context.app.service('semesters').find({
        query: {
          $limit: 0,
          startDate: { $lte: date },
          endDate: { $gte: date },
        },
      })
      if (startsinSemester.total === 0) {
        throw new Error('Session must occur during an existing semester.')
      }
      return startsinSemester.total
    }

    if (startsAt) {
      await sameTimeSemesters(startsAt)
    }
    if (endsAt) {
      await sameTimeSemesters(endsAt)
    }
    return context
  }
}
