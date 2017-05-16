var express = require('express')
var router = express.Router()
const controller = require('./controller')

router.get('/', controller)

module.exports = router
