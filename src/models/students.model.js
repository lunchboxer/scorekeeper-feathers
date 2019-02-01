// students-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const ObjectId = Schema.Types.ObjectId
  const students = new Schema(
    {
      chineseName: String,
      pinyinName: String,
      englishName: String,
      birthdate: Date,
      gender: String,
      groups: [{ type: ObjectId, ref: 'groups' }]
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('students', students)
}
