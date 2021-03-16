'use strict';
module.exports = function(app) {
  var comet = require('../controllers/CometController');
  var authenticateToken = require('../middleware/authMiddleware')
  
  // user Routes
  app.route('/comet')
    .get(authenticateToken, comet.list_all_comet, )
    .post(authenticateToken, comet.create_a_comet, );


  app.route('/comet/:cometId')
    .get(authenticateToken, comet.read_a_comet, authenticateToken)
    .put(authenticateToken, comet.update_a_comet)
    .delete(authenticateToken, comet.delete_a_comet);
};
