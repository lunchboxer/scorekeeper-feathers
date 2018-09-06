// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function () {
  return context => {
    const min = -5
    const max = 5
    const { value } = context.data
    if (value && !(min < value < max)) {
      throw new Error(`Value must be between ${min} and ${max}.`)
    }
    return context
  }
}
