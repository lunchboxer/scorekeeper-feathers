// studentGroups-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const studentGroups = new Schema(
    {
      name: { type: String, required: true },
      students: [{ type: Schema.Types.ObjectId, ref: 'student' }]
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('studentGroups', studentGroups)
}
