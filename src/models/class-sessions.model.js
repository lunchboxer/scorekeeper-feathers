// class-sessions-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const ObjectId = Schema.Types.ObjectId
  const classSessions = new Schema(
    {
      stage: { type: String, required: true, default: 'Inactive' },
      startsAt: { type: Date, required: true },
      endsAt: { type: Date, required: true },
      group: { type: ObjectId, ref: 'groups' }
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('classSessions', classSessions)
}
