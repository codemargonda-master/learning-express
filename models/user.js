'use strict'

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        // associations can be defined here
        User.hasMany(models.Post)
      }
    }
  })
  return User
}
