'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CometSchema = new Schema({
  name: {
    type: String,
  },
  meetups: {
    type: String,
  },
  availableBudget: {
    type: Number,
  },
  leadUserId: {
    type: String,
  },
  userIds: {
    type: Number,
  },
});

module.exports = mongoose.model('Comet', CometSchema);
