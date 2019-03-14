/* eslint quotes: 0 */
// Defines Sequelize model for service `users`. (Can be re-generated.)
const merge = require('lodash.merge')
const Sequelize = require('sequelize')
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes
// !code: imports // !end
// !code: init // !end

// Your model may need the following fields:
//   email:      { type: DataTypes.STRING, allowNull: false, unique: true },
//   password:   { type: DataTypes.STRING, allowNull: false },
let moduleExports = merge(
  {},
  // !<DEFAULT> code: sequelize_model
  {
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING
    },
    lastName: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.TEXT
    },
    roleId: {
      type: DataTypes.INTEGER
    }
  }
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
