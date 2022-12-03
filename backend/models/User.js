const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      minlength: 2,
      maxlength: 20,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    profileImage: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
    },
    dob: {
      type: Date,
      required: [true, "Please provide date of birth"],
    },
    location: {
      type: String,
      maxlength: 20,
    },
    about: {
      type: String,
      maxlength: 20,
      default: "About",
    },
  },
  { timestamps: true }
);

// middleware

UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt();
  let user = this;
  user.password = await bcrypt.hash(user.password, salt);
});

UserSchema.methods.createJWT = function () {
  let user= this;
  return jwt.sign(
     { id: user._id, name: user.name, profileImage: user.profileImage },
     process.env.JWT_SECRET,
     {
        expiresIn: process.env.JWT_LIFETIME,
     }
  );
};

UserSchema.methods.comparePassword = async function (pw) {
  let user = this;
  const isCorrect = await bcrypt.compare(pw, user.password);
  return isCorrect;
};


module.exports = mongoose.model("User",UserSchema);