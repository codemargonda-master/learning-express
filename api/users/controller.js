const User = require('../../models').User

module.exports = {
  getAll: (req, res, next) => {
    User
      .findAll()
      .then(users => {
        console.log(users)
        res.status(200).send({
          data: users
        })
      })
      .catch(error => {
        console.log(error)
        res.status(400).send({
          err: error
        })
      })
  },

  getId: (req, res, next) => {
    res.status(200).send({
      user: req.params.user_id
    })
  },

  getIdWithPost: (req, res, next) => {
    res.status(200).send({
      user: req.params.user_id,
      post: req.params.post_id
    })
  },

  create: (req, res, next) => {
    const data = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }

    User
      .create(data)
      .then(user => {
        console.log(data)
        res.status(200).send({
          data: {
            name: user.name,
            email: user.email
          }
        })
      })
      .catch(error => {
        console.log(error)
        res.status(400).send({
          err: error
        })
      })
  },

  update: (req, res, next) => {
    res.status(200).send({
      message: 'PUT'
    })
  },

  delete: (req, res, next) => {
    res.status(200).send({
      message: 'DELETE'
    })
  }

}
