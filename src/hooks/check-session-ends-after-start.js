// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return async context => {
    const { startsAt, endsAt } = context.data
    if (startsAt || endsAt) {
      // at least one of the times is present
      let startsAtDate, endsAtDate
      if ((!startsAt || !endsAt) && (startsAt || endsAt)) {
        // one is missing
        const theSession = await context.app
          .service('class-sessions')
          .get(context.id)
        const newStartsAt = startsAt || theSession.startsAt
        const newEndsAt = endsAt || theSession.endsAt
        endsAtDate = new Date(newEndsAt)
        startsAtDate = new Date(newStartsAt)
      } else {
        // both are present
        endsAtDate = new Date(endsAt)
        startsAtDate = new Date(startsAt)
      }
      if (startsAtDate >= endsAtDate) {
        throw new Error('Start time must be before end time.')
      }
    }
    return context
  }
}
