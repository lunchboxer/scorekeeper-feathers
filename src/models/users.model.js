// users-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const users = new mongooseClient.Schema(
    {
      email: { type: String, unique: true },
      password: String,
      name: String
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('users', users)
}
