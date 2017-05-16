const User = require('../../models').User

module.exports = {
  getAll: (req, res, next) => {
    User
      .findAll()
      .then(users => {
        res.status(200).send({
          data: users
        })
      })
      .catch(error => {
        res.status(400).send({
          err: error
        })
      })
  },

  getId: (req, res, next) => {
    User
      .findById(req.params.user_id)
      .then(user => {
        res.status(200).send({ data: user })
      })
      .catch(error => {
        res.status(400).send({ err: error })
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
      .findOrCreate({
        where: {email: data.email},
        defaults: {
          name: data.name,
          password: data.password
        }
      }).spread((user, created) => {
        console.log(created)
        res.status(201).send({
          data: {
            name: data.name,
            email: data.email
          }
        })
      }).catch(err => {
        res.status(400).send({ err: error })
      })
  },

  update: (req, res, next) => {
    res.status(200).send({
      message: 'PUT'
    })
  },

  deleteAll: (req, res, next) => {
    User
      .destroy({
        truncate: true
      }).then(data => {
        res.status(200).send({
          m: `All users have been deleted.`
        })
      }).catch(error => {
        res.status(400).send({ err: error })
      })
  },

  delete: (req, res, next) => {
    User
      .findById(req.params.user_id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            m: `User with id ${req.params.user_id} is not found.`
          })
        } else {
          User.destroy({
            where: { id: req.params.user_id },
            truncate: true
          }).then(() => {
            res.status(204).send({
              m: `User with id ${req.params.user_id} has been deleted.`
            })
          }).catch(error => {
            res.status(400).send({ err: error })
          })
        }
      }).catch(err => {
        res.status(400).send({ err: error })
      })
  }

}
