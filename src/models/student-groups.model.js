// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const studentGroups = sequelizeClient.define(
    'student_groups',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false
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
  studentGroups.associate = function (models) {
    studentGroups.hasMany(models.students, { foreignKey: 'group' })
    studentGroups.belongsTo(models.semesters)
  }

  return studentGroups
}
