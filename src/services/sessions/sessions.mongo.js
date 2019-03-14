/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `sessions`. (Can be re-generated.)
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
      stage: {
        enum: ['Inactive', 'Active', 'Started', 'Ended'],
        default: 'Inactive',
        bsonType: 'string'
      },
      startsAt: {
        format: 'date-time',
        bsonType: 'string'
      },
      endsAt: {
        format: 'date-time',
        bsonType: 'string'
      },
      groupId: {
        bsonType: 'objectId'
      }
    },
    required: ['stage', 'startsAt', 'endsAt', 'groupId']
  }
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
