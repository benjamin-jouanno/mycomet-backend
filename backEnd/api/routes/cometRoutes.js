'use strict';
module.exports = function(app) {
  var comet = require('../controllers/CometController');

  // user Routes
  app.route('/comet')
    .get(comet.list_all_comet)
    .post(comet.create_a_comet);


  app.route('/comet/:cometId')
    .get(comet.read_a_comet)
    .put(comet.update_a_comet)
    .delete(comet.delete_a_comet);
};
