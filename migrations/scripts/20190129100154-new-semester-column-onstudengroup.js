'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('student_groups').then(attributes => {
      if (!attributes.semesterId) {
        return queryInterface.addColumn('student_groups', 'semesterId', {
          type: Sequelize.INTEGER,
          allowNull: true
        })
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.describeTable('student_groups').then(attributes => {
      if (attributes.semesterId) {
        return queryInterface.removeColumn('student_groups', 'semesterId')
      }
    })
  }
}
