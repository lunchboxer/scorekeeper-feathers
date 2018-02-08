// classSession-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const classSession = new Schema(
    {
      startsAt: Date,
      endsAt: Date,
      stage: String,
      studentGroups: [{ type: Schema.Types.ObjectId, ref: 'studentGroup' }]
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('classSession', classSession)
}
