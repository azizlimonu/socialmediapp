const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

// register user controller
const register = async (req, res) => {
res.send("Hello world")
};


// login user controller
const login = async (req, res) => {
  res.send("Hello world")
  
};

module.exports = { register, login };