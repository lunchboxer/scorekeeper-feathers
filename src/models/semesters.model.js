// semesters-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient')
  const { Schema } = mongooseClient
  const semesters = new Schema(
    {
      name: { type: String, required: true },
      startDate: { type: Date, required: true },
      endDate: { type: Date, required: true }
    },
    {
      timestamps: true
    }
  )

  return mongooseClient.model('semesters', semesters)
}
