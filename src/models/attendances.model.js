// attendances-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const ObjectId = Schema.Types.ObjectId
  const attendances = new Schema(
    {
      status: { type: String, required: true },
      arrivedAt: Date,
      student: { type: ObjectId, required: true, ref: 'students' },
      classSession: { type: ObjectId, required: true, ref: 'classSessions' }
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('attendances', attendances)
}
