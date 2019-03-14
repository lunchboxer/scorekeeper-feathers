/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `points`. (Can be re-generated.)
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
      value: {
        minimum: -5,
        maximum: 5,
        bsonType: 'int'
      },
      studentId: {
        bsonType: 'objectId'
      },
      sessionId: {
        bsonType: 'objectId'
      }
    },
    required: ['value', 'studentId', 'sessionId']
  }
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
