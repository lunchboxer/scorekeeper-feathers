// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const students = sequelizeClient.define(
    'students',
    {
      chineseName: DataTypes.STRING,
      pinyinName: DataTypes.STRING,
      englishName: DataTypes.STRING,
      birthdate: {
        type: DataTypes.DATEONLY
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
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    students.hasMany(models.attendances, { foreignKey: 'student' })
  }

  return students
}
