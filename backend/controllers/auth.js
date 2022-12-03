const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

// register user controller
const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      res.status(400).json({ message: "Username is already registered" })
    }
    user = await User.create({ ...req.body });
    const { _id: id, name, profileImage } = user;
    const token = user.createJWT();
    res.status(200).json({
      id,
      token,
      name,
      profileImage,
    });
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
};


// login user controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: 'All fields are required' })
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(401).json({ message: 'User Not Found' });
    }

    const isPasswordCorrect = await user.comparePassword(req.body.password);
    if (!isPasswordCorrect) {
      res.status(401).json({ message: 'Wrong Credentials' });
    }

    const { _id: id, name, profileImage } = user;
    const token = user.createJWT();

    res.status(200).json({
      id,
      token,
      name,
      profileImage,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: error.message });
  }

};

module.exports = { register, login };