const express = require('express')

// controller functions
const { loginUser, signupUser, getUser, updateUser } = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

//GET a single user
router.get('/:id', getUser)

//UPDATE USER
router.patch('/:id', updateUser)

// signup route
router.post('/signup', signupUser)

module.exports = router
