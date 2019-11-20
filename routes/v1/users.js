const express = require('express')
const container = require('../../di')
const router = express.Router()

router.get('', container.UsersController.getList.bind(container.UsersController))
router.get('/profile', container.UsersController.getProfile.bind(container.UsersController))
router.post('/register', container.UsersController.create.bind(container.UsersController))

module.exports = router