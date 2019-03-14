/* eslint quotes: 0 */
// Defines Sequelize model for service `students`. (Can be re-generated.)
const merge = require('lodash.merge')
const Sequelize = require('sequelize')
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes
// !code: imports // !end
// !code: init // !end

let moduleExports = merge(
  {},
  // !<DEFAULT> code: sequelize_model
  {
    chineseName: {
      type: DataTypes.STRING
    },
    pinyinName: {
      type: DataTypes.TEXT
    },
    englishName: {
      type: DataTypes.STRING
    },
    birthdate: {
      type: DataTypes.DATEONLY
    },
    gender: {
      type: Sequelize.ENUM(['F', 'M'])
    }
  }
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
