const students = require('./students/students.service.js')
const studentGroups = require('./student-groups/student-groups.service.js')
const classSession = require('./class-session/class-session.service.js')

const users = require('./users/users.service.js')

module.exports = function (app) {
  app.configure(students)
  app.configure(studentGroups)
  app.configure(classSession)
  app.configure(users)
}
