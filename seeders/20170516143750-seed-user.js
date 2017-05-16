'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    const users = [{
      name: 'Administrator',
      email: 'admin@domain.com',
      password: 'adminadmin',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Owner',
      email: 'owner@domain.com',
      password: 'ownerowner',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Help',
      email: 'help@domain.com',
      password: 'helphelp',
      createdAt: new Date(),
      updatedAt: new Date()
    }]

    return queryInterface.bulkInsert('Users', users, {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
