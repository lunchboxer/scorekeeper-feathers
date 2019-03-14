/* eslint quotes: 0 */
// Defines Mongoose model for service `attendances`. (Can be re-generated.)
const merge = require('lodash.merge')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge(
  {},
  // !<DEFAULT> code: model
  {
    status: {
      type: String,
      enum: ['leftEarly', 'present', 'late', 'absent', 'lateLeftEarly'],
      required: true
    },
    arrivedAt: String,
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    sessionId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  }
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
