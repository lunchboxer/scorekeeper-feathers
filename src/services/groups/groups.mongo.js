
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `groups`. (Can be re-generated.)
const merge = require('lodash.merge')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    bsonType: "object",
    additionalProperties: false,
    properties: {
      _id: {
        bsonType: "objectId"
      },
      name: {
        minLength: 1,
        maxLength: 20,
        bsonType: "string"
      },
      semesterId: {
        faker: {
          fk: "semesters:random"
        },
        bsonType: "objectId"
      }
    },
    required: [
      "name",
      "semesterId"
    ]
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
