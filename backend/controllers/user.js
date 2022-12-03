const { StatusCodes } = require('http-status-codes');
const User = require('../models/User');
const Post = require('../models/Post');

// Get User 
const getUsers = async (req, res) => { 
   res.send("Hello world")
  
};
// Update User
const updateUser = async (req, res) => { 
   res.send("Hello world")
  
};
// Update User Picture
const updateDP = async (req, res) => { 
   res.send("Hello world")
  
};

module.exports = { updateUser, getUsers, updateDP };