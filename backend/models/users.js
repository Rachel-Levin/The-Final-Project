const mongoose = require('mongoose');

const theValidator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validator: (v) => theValidator.isEmail(v),
    message: (props) => `${props.value} is not a valid email!`,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    select: false,

  },
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
});

module.exports = mongoose.model('user', userSchema);
