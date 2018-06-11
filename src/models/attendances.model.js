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
      },
      studentId: {
        type: DataTypes.INTEGER,
        unique: 'OnePerStudentPerSession'
      },
      classSessionId: {
        type: DataTypes.INTEGER,
        unique: 'OnePerStudentPerSession'
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
    attendances.belongsTo(models.students, {
      foreignKey: attendances.rawAttributes.studentId
    })
    attendances.belongsTo(models.class_sessions, {
      foreignKey: attendances.rawAttributes.classSessionId
    })
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  }

  return attendances
}
