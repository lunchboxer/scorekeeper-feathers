module.exports = function () {
  return context => {
    const { birthdate } = context.data
    if (birthdate) {
      const bdate = new Date(birthdate)
      const now = new Date()
      if (bdate > now) {
        throw new Error('Birth date must be a past date.')
      }
      if (birthdate < '1910-00-00') {
        throw new Error('No students born before 1910 allowed.')
      }
    }
    return context
  }
}
