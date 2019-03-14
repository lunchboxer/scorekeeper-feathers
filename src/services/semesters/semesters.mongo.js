/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `semesters`. (Can be re-generated.)
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
      name: {
        bsonType: 'string'
      },
      startDate: {
        format: 'date-time',
        bsonType: 'string'
      },
      endDate: {
        format: 'date-time',
        bsonType: 'string'
      }
    },
    required: ['name', 'startDate', 'endDate']
  }
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
