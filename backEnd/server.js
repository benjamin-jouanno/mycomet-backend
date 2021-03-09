  var express = require('express'),
  cors = require('cors')
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  User = require('./api/models/userModel'), //created model loading here
  Meetups = require('./api/models/meetupsModel'),
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
const LOCAL_DATABASE = "mongodb://localhost/mycometdb";
const LOCAL_PORT  = 8080;


mongodb.MongoClient.connect(process.env.MONGODB_URI || LOCAL_DATABASE,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, function (error, client) {

        if (error) {
            console.log(error);
            process.exit(1);
        }

        database = client.db();
        console.log("Database connection done.");

        var server = app.listen(process.env.PORT || LOCAL_PORT, function () {
            var port = server.address().port;
            console.log("App now running on port", port);
        });
    });

/*  "/api/status"
 *   GET: Get server status
 *   PS: it's just an example, not mandatory
 */
app.get("/api/status", function (req, res) {
    res.status(200).json({ status: "UP" });
});

function manageError(res, reason, message, code) {
    console.log("Error: " + reason);
    res.status(code || 500).json({ "error": message });
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})


app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})


var routes = require('./api/routes/userRoutes');
var meetups = require('./api/routes/meetupsRoutes');
var auth = require('./api/routes/authRoutes');

routes(app); //register the route
meetups(app);
auth(app);

app.listen(port);


console.log('my comet RESTful API server started on: ' + port);
