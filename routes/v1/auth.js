const express = require('express')
const container = require('../../di')
const router = express.Router()

router.post('', container.UsersController.login.bind(container.UsersController));

module.exports = router
