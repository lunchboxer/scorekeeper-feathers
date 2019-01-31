// groups-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const ObjectId = Schema.Types.ObjectId
  const groups = new Schema(
    {
      name: { type: String, required: true },
      students: { type: [ObjectId], ref: 'students' },
      semester: { type: ObjectId, ref: 'semesters' }
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('groups', groups)
}
