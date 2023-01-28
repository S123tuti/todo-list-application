const express = require('express')
const router = express.Router()

const { createUser, login} = require('../Controller/userController')

router.post('/user', createUser)
router.post('/login', login)

module.exports = router