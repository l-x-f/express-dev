const express = require('express')
const Auth = require('../controller/auth')
const router = express.Router()


// define the home page route
router.post('/register', Auth.register)
router.post('/login', Auth.login)



module.exports = router