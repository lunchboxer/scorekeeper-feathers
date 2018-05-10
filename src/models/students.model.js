// students-model.js - A mongoose model

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const students = new Schema(
    {
      chineseName: { type: String, required: true },
      pinyinName: String,
      englishName: String,
      birthdate: String,
      gender: String,
      group: { type: Schema.Types.ObjectId, ref: 'student-group' }
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('students', students)
}
