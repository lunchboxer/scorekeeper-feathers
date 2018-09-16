// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const classSessions = sequelizeClient.define(
    'class_sessions',
    {
      startsAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endsAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      stage: {
        type: DataTypes.ENUM('Inactive', 'Active', 'Started', 'Ended'),
        allowNull: false,
        defaultValue: 'Inactive'
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
  classSessions.associate = function (models) {
    classSessions.belongsTo(models.student_groups)
    classSessions.hasMany(models.attendances, { foreignKey: 'session' })
  }

  return classSessions
}
