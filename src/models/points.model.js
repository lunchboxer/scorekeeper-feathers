// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient')
  const points = sequelizeClient.define(
    'points',
    {
      value: {
        type: DataTypes.INTEGER,
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
  points.associate = function (models) {
    // Define associations here
    points.belongsTo(models.students)
    points.belongsTo(models.class_sessions)
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  }

  return points
}
