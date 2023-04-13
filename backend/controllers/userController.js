const User = require('../models/userModel')

// login a user
const loginUser = async (req, res) => {
  res.json({mssg: 'login user'})
}

// signup a user
const signupUser = async (req, res) => {
  res.json({mssg: 'signup user'})
}


User.signup


module.exports = { signupUser, loginUser }
