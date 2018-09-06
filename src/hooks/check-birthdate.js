const isAfter = require('validator/lib/isAfter')

// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return context => {
    const { birthDate } = context.data
    if (birthDate && isAfter(birthDate)) {
      throw new Error('Birth date must be a past date.')
    }
    return context
  }
}
