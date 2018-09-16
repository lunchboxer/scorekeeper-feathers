// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const attendances = sequelizeClient.define(
    'attendances',
    {
      status: {
        type: DataTypes.ENUM(
          'leftEarly',
          'present',
          'late',
          'absent',
          'lateLeftEarly'
        ),
        allowNull: false
      },
      arrivedAt: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      hooks: {
        beforeCount (options) {
          options.raw = true
        }
      }
    }
  )

  // eslint-disable-next-line no-unused-vars
  attendances.associate = function (models) {
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  }

  return attendances
}
