'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MeetupSchema = new Schema({
  name: {
    type: String,
  },
  availablePlaces: {
    type: Number,
    default: 0
  },
  registeredInternalUser: {
    type: Number,
    default: 0
  },
  registeredIExternallUser: {
    type: Number,
    default: 0
  },
  registeredContractors: {
    type: Number,
    default: 0
  },
  eventDate: {
    type: Date,
    default: Date.now()
  },
  eventHour: {
    type: String,
  },
  eventLocation: {
    type: String,
  },
  isArchived: {
    type: Boolean,
    default: false
  },
  noShowPercent: {
    type: Number,
  },
  cometId: {
    type: String,
  },
});

module.exports = mongoose.model('Meetup', MeetupSchema);
