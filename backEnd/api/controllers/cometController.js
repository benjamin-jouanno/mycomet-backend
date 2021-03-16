'use strict';


var checkParams = require('../helpers/checkParams');
var mongoose = require('mongoose'),
  Comet = mongoose.model('Comet');

exports.list_all_comet = function(req, res) {
  Comet.find({}, function(err, comet) {
    if (err)
      res.send(err);
    res.json(comet);
  });
};


exports.create_a_comet = function(req, res) {
  var new_comet = new Comet(req.body);
  new_comet.save(function(err, comet) {
    if (err)
      res.send(err);
    res.json(comet);
  });
};


exports.read_a_comet = function(req, res) {
  Comet.findById(req.params.cometId, function(err, comet) {
    if (err)
      res.send(err);
    res.json(comet);
  });
};


exports.update_a_comet = function(req, res) {
  Comet.findOneAndUpdate({_id: req.params.cometId}, req.body, {new: true}, function(err, comet) {
    if (err)
      res.send(err);
    res.json(comet);
  });
};


exports.delete_a_comet = function(req, res) {
  Comet.remove({
    _id: req.params.cometId
  }, function(err, comet) {
    if (err)
      res.send(err);
    res.json({ message: 'Comet successfully deleted' });
  });
};
