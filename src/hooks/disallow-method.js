module.exports = function () {
  return context => {
    throw new Error(
      `'${context.path}' service ${context.method} method is disabled.`
    )
  }
}
