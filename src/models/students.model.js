const Sequelize = require('sequelize')

const DataTypes = Sequelize.DataTypes
const now = new Date()

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const students = sequelizeClient.define(
    'students',
    {
      chineseName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      pinyinName: DataTypes.STRING,
      englishName: DataTypes.STRING,
      birthDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isBefore: {
            args: now.toJSON(),
            msg: 'Birth date must be a past date.'
          }
        }
      },
      gender: DataTypes.ENUM('M', 'F')
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
  students.associate = function (models) {
    // students.belongsTo(models.student_groups)
  }

  return students
}
