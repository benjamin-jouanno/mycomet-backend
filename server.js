  var express = require('express'),
  cors = require('cors')
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //created model loading here
  Meetups = require('./api/models/meetupsModel'),
  bodyParser = require('body-parser');
  commet = require('./api/models/cometModels'),

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/mycometdb');

app.use(cors())

//Parsear el body usando body parser
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

var routes = require('./api/routes/userRoutes');
var meetups = require('./api/routes/meetupsRoutes');
var auth = require('./api/routes/authRoutes');
var comet = require('./api/routes/cometRoutes');

routes(app); //register the route
meetups(app);
auth(app);
comet(app);

app.listen(port);


console.log('my comet RESTful API server started on: ' + port);
