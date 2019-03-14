/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `attendances`. (Can be re-generated.)
const merge = require('lodash.merge')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge(
  {},
  // !<DEFAULT> code: model
  {
    bsonType: 'object',
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: 'objectId'
      },
      status: {
        enum: ['leftEarly', 'present', 'late', 'absent', 'lateLeftEarly'],
        bsonType: 'string'
      },
      arrivedAt: {
        format: 'date-time',
        bsonType: 'string'
      },
      studentId: {
        bsonType: 'objectId'
      },
      sessionId: {
        bsonType: 'objectId'
      }
    },
    required: ['status', 'studentId', 'sessionId']
  }
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
