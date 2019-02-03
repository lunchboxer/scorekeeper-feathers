
/* eslint quotes: 0 */
// Defines Mongoose model for service `sessions`. (Can be re-generated.)
const merge = require('lodash.merge')
// eslint-disable-next-line no-unused-vars
const mongoose = require('mongoose')
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: model
  {
    stage: {
      type: String,
      enum: [
        "Inactive",
        "Active",
        "Started",
        "Ended"
      ],
      default: "Inactive",
      required: true
    },
    startsAt: {
      type: String,
      required: true
    },
    endsAt: {
      type: String,
      required: true
    },
    groupId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
