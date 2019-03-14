/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `users`. (Can be re-generated.)
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
      username: {
        minLegth: 2,
        maxLength: 30,
        faker: 'internet.userName',
        bsonType: 'string'
      },
      firstName: {
        minLength: 2,
        maxLength: 30,
        faker: 'name.firstName',
        bsonType: 'string'
      },
      lastName: {
        minLength: 2,
        maxLength: 30,
        faker: 'name.lastName',
        bsonType: 'string'
      },
      password: {
        faker: {
          exp: 'ctx.hashPassword("secret")'
        },
        bsonType: 'string'
      },
      roleId: {
        faker: {
          fk: 'roles:random'
        },
        bsonType: 'objectId'
      }
    },
    required: ['username']
  }
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
