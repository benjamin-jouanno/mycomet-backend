'use strict';
module.exports = function(app) {
  var meetup = require('../controllers/meetupsController');

  // meetup Routes
  app.route('/meetup')
    .get(meetup.list_all_meetups)
    .post(meetup.create_a_meetup);


  app.route('/meetup/:meetupId')
    .get(meetup.read_a_meetup)
    .put(meetup.update_a_meetup)
    .delete(meetup.delete_a_meetup);
};

