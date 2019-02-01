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
      semester: { type: ObjectId, ref: 'semesters', required: true }
    },
    {
      timestamps: true
    }
  )
  groups.virtual('students', {
    ref: 'students',
    localField: '_id',
    foreignField: 'groups'
  })

  return mongooseClient.model('groups', groups)
}
