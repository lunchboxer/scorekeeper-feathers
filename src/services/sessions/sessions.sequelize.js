
/* eslint quotes: 0 */
// Defines Sequelize model for service `sessions`. (Can be re-generated.)
const merge = require('lodash.merge')
const Sequelize = require('sequelize')
// eslint-disable-next-line no-unused-vars
const DataTypes = Sequelize.DataTypes
// !code: imports // !end
// !code: init // !end

let moduleExports = merge({},
  // !<DEFAULT> code: sequelize_model
  {
    stage: {
      type: Sequelize.ENUM(["Inactive","Active","Started","Ended"]),
      allowNull: false,
      default: "Inactive"
    },
    startsAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    endsAt: {
      type: DataTypes.DATE,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  // !end
  // !code: moduleExports // !end
)

// !code: exports // !end
module.exports = moduleExports

// !code: funcs // !end
// !code: end // !end
