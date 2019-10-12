var express  = require("express"),
    app      = express(),
    http     = require("http"),
	bodyParser = require('body-parser');
    server   = http.createServer(app),
    mongoose = require('mongoose'),
	methodOverride = require('method-override');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/renovatica');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get('/', function(req, res) {
   res.send("Hello World!");
});

app.use(router);

mongoose.createConnection('mongodb://localhost/renovatica', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
  });
});