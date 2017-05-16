    //untuk masuk ke variable User yang berada pada user.js
    const User = require("../../models").User

module.exports = {
  getAll: (req, res, next) => {
    // res.status(200).send({
    //   message: 'GET ALL'
    //   User.findAll
    // })
    User.findAll().then(users => {
        res.send({
          data: users
      })
    })
  },

  getId: (req, res, next) => {
      User.findById(req.params.user_id).then(users => {
        // project will be the first entry of the Projects table with the title 'aProject' || null
        res.status(200).send({
            result:users
        })
    })
  },

  getIdWithPost: (req, res, next) => {
    res.status(200).send({
      user: req.params.user_id,
      post: req.params.post_id
    })
  },

  create: (req, res, next) => {
    User.create({
        first_name:req.body.first_name,
        last_name: req.body.last_name,
        bio : req.body.bio
     })
    .then(user => {
        res.status(201).send({
            //user akan kembaliin nilai id, createAt, dan updateat
            result : user,
            message: 'success'
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
