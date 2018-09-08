// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return context => {
    const { birthdate } = context.data
    if (birthdate) {
      const bdate = new Date(birthdate)
      const now = new Date()
      if (bdate > now) {
        throw new Error('Birth date must be a past date.')
      }
    }
    return context
  }
}
