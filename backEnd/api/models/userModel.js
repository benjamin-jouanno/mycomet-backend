'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  password: {
    type: String,
  },
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  cometId: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  phoneNbr: {
    type: Number,
  },
  email: {
    type: String,
  },
  totalJex: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model('User', UserSchema);
