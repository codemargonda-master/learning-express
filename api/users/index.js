var express = require('express')
var router = express.Router()
const controller = require('./controller')

router.get('/', controller.getAll)
router.get('/:user_id', controller.getId)
router.get('/:user_id/posts/:post_id', controller.getIdWithPost)
router.post('/', controller.create)
router.put('/', controller.update)
router.delete('/', controller.deleteAll)
router.delete('/:user_id', controller.delete)

module.exports = router
