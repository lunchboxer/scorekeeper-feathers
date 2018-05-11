const users = require('./users/users.service.js')
const students = require('./students/students.service.js')
const studentGroups = require('./student-groups/student-groups.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users)
  app.configure(students)
  app.configure(studentGroups)
}
