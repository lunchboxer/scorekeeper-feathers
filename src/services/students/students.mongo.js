
/* eslint quotes: 0 */
// Defines the MongoDB $jsonSchema for service `students`. (Can be re-generated.)
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
      chineseName: {
        minLength: 1,
        maxLength: 10,
        pattern: "^[一-龥]+$",
        bsonType: "string"
      },
      pinyinName: {
        minLength: 2,
        pattern: "^[a-zA-Zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜs']+$",
        bsonType: "string"
      },
      englishName: {
        minLength: 2,
        maxLength: 30,
        faker: "name.firstName",
        bsonType: "string"
      },
      birthdate: {
        format: "date",
        bsonType: "string"
      },
      gender: {
        enum: [
          "F",
          "M"
        ],
        bsonType: "string"
      }
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
