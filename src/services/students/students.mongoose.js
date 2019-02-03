
/* eslint quotes: 0 */
// Defines Mongoose model for service `students`. (Can be re-generated.)
const merge = require('lodash.merge')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    chineseName: String,
    pinyinName: String,
    englishName: String,
    birthdate: String,
    gender: {
      type: String,
      enum: [
        "F",
        "M"
      ]
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
