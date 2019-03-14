// Configure the Feathers services. (Can be re-generated.)
let attendances = require('./attendances/attendances.service')
let groupStudents = require('./group-students/group-students.service')
let groups = require('./groups/groups.service')
let messages = require('./messages/messages.service')
let points = require('./points/points.service')
let roles = require('./roles/roles.service')
let semesters = require('./semesters/semesters.service')
let sessions = require('./sessions/sessions.service')
let students = require('./students/students.service')
let users = require('./users/users.service')
let viewers = require('./viewers/viewers.service')

// !code: imports // !end
// !code: init // !end

// eslint-disable-next-line no-unused-vars
let moduleExports = function (app) {
  app.configure(attendances)
  app.configure(groupStudents)
  app.configure(groups)
  app.configure(messages)
  app.configure(points)
  app.configure(roles)
  app.configure(semesters)
  app.configure(sessions)
  app.configure(students)
  app.configure(users)
  app.configure(viewers)
  // !code: func_return // !end
}

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
