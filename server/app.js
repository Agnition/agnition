// core modules and config
var path = require('path');
var config = require('./config');

// express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userRouter = require('./users/routes');
var session = require('express-session');
var Exp = require('./exps/model.js');
var User = require('./users/model.js');
var verify = require('./verify.js');

// db
var mongoose = require('mongoose');
mongoose.connect(config.dbPath);

app.use(session({
  secret: 'secret'
}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,  './client/public'));

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
require('./auth.js')(app);

if (process.env.ENV === undefined) {
  app.get('/', function(req, res) {
    Exp.find({}, function(err, exps) {
      User.findOne({}, function(err, user) {
        console.log(user);
        res.render('index', {
          user : JSON.stringify(user),
          exps : JSON.stringify(exps)
        });
      });
    });
  });
}
else {
  app.get('/', verify, function(req, res) {
    Exp.find({}, function(err, exps) {
      res.render('index', {
        user : JSON.stringify(req.user),
        exps : JSON.stringify(exps)
      });
    });
  });
}


app.use(express.static(path.join(__dirname, './client/public')));
app.use('/users', userRouter);

// start it up
console.log('agnition is listening on port ' + config.port + " " + process.env.ENV);

module.exports = app;
