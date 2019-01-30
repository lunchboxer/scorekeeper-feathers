// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return async context => {
    const { startDate, endDate } = context.data
    if (startDate || endDate) {
      // at least one of the times is present
      let startDateDate, endDateDate
      if ((!startDate || !endDate) && (startDate || endDate)) {
        // one is missing
        const thisSemester = await context.app
          .service('semesters')
          .get(context.id)
        const newStartDate = startDate || thisSemester.startDate
        const newEndDate = endDate || thisSemester.endDate
        endDateDate = new Date(newEndDate)
        startDateDate = new Date(newStartDate)
      } else {
        // both are present
        endDateDate = new Date(endDate)
        startDateDate = new Date(startDate)
      }
      if (startDateDate >= endDateDate) {
        throw new Error('Start date of semester must be before end date.')
      }
    }
    return context
  }
}
