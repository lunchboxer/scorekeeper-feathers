const isBefore = require('validator/isBefore')

module.exports = function (options = {}) {
  return async context => {
    const { data } = context
    if (data.birthdate) {
      if (!isBefore(data.birthdate)) {
        throw new Error('Birthdate must be a past date.')
      }
      data.birtdate = data.birthdate.split('T')[0] + 'T00:00:00Z'
    }
    return context
  }
}
