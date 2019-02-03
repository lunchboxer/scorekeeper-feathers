// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return context => {
    const { startsAt, endsAt } = context.data
    // if neither time is being worked on then skip ahead
    if (startsAt || endsAt) {
      const now = new Date()
      const aYearFromNow = new Date(now.valueOf() + 3.154e10).toJSON()
      if (startsAt) {
        const startsAtDate = new Date(startsAt)
        if (startsAtDate > aYearFromNow) {
          throw new Error('Start time cannot be more than a year ahead.')
        }
      }
      if (endsAt) {
        const endsAtDate = new Date(endsAt)
        if (endsAtDate > aYearFromNow) {
          throw new Error('End time cannot be more than a year ahead.')
        }
      }
    }
    return context
  }
}
