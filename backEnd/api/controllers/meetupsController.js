'use strict';


var mongoose = require('mongoose'),
  Meetup = mongoose.model('Meetup');

exports.list_all_meetups = function(req, res) {
  Meetup.find({}, function(err, meet) {
    if (err)
      res.send(err);
    res.json(meet);
  });
};




exports.create_a_meetup = function(req, res) {
  var new_meetup = new Meetup(req.body);
  new_meetup.save(function(err, meet) {
    if (err)
      res.send(err);
    res.json(meet);
  });
};


exports.read_a_meetup = function(req, res) {
  Meetup.findById(req.params.meetupId, function(err, meet) {
    if (err)
      res.send(err);
    res.json(meet);
  });
};


exports.update_a_meetup = function(req, res) {
  Meetup.findOneAndUpdate({_id: req.params.meetupId}, req.body, {new: true}, function(err, meet) {
    if (err)
      res.send(err);
    res.json(meet);
  });
};


exports.delete_a_meetup = function(req, res) {
  Meetup.remove({
    _id: req.params.meetupId
  }, function(err, meet) {
    if (err)
      res.send(err);
    res.json({ message: 'Meetup successfully deleted' });
  });
};
