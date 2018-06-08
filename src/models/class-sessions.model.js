// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const now = new Date()
  const aYearFromNow = new Date(now.valueOf() + 3.154e10).toJSON()
  const sequelizeClient = app.get('sequelizeClient')
  const classSessions = sequelizeClient.define(
    'class_sessions',
    {
      startsAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isBefore: aYearFromNow
        }
      },
      endsAt: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isBefore: aYearFromNow
        }
      },
      stage: {
        type: DataTypes.ENUM('Inactive', 'Active', 'Started', 'Ended'),
        allowNull: false,
        defaultValue: 'Inactive'
      }
    },
    {
      validate: {
        endsAfterItStarts () {
          const ends = new Date(this.endsAt)
          const starts = new Date(this.startsAt)
          if (ends <= starts) {
            throw new Error('Class session must end after start time.')
          }
        }
      },
      hooks: {
        beforeCount (options) {
          options.raw = true
        }
      }
    }
  )

  // eslint-disable-next-line no-unused-vars
  classSessions.associate = function (models) {
    // points relation defined on points model
    classSessions.belongsTo(models.student_groups)
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  }

  return classSessions
}
