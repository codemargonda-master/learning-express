'use strict'

const User = require('../models').User

module.exports = {
  up: async function (queryInterface, Sequelize) {
    const posts = await User.findAll({ limit: 1 })
      .then(data => {
        const users = JSON.parse(JSON.stringify(data))
        // console.log(users[0])
        const user_id = users[0].id
        // console.log(user_id)
        return user_id
      }).then(user_id => {
        const posts = [{
          title: 'Hello World',
          content: 'Hello people of the world.',
          author: user_id,
          createdAt: new Date(),
          updatedAt: new Date()
        }, {
          title: 'Good Bye',
          content: 'It is time to go.',
          author: user_id,
          createdAt: new Date(),
          updatedAt: new Date()
        }]
        return posts
      }).catch(err => {
        return err
      })

    return queryInterface.bulkInsert('Posts', posts, {})
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Posts', null, {})
  }
}
