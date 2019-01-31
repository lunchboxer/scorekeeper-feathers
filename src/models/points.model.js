// points-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const ObjectId = Schema.Types.ObjectId
  const points = new Schema(
    {
      value: { type: Number, required: true },
      student: { type: ObjectId, required: true, ref: 'students' },
      session: { type: ObjectId, required: true, ref: 'classSessions' }
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('points', points)
}
