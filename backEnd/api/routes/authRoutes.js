'use strict';
module.exports = function(app) {
  var auth = require('../controllers/authController');

  // user Routes
  app.route('/register')
    .post(auth.register_new_user);


  app.route('/me')
    .get(auth.read_me);

  app.route('/login')
    .post(auth.login_user);

  app.route('/logout')
  .post(auth.logout);

};
