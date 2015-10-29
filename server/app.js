// core modules and config
var path = require('path');
var config = require('./config');
var utils = require('./utils');
var _ = require('underscore');
var mock = require('./mock.js');

// express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userRouter = require('./users/routes');
var sampleRouter = require('./samples/routes.js');
var session = require('express-session');
var Exp = require('./exps/models/Exp.js');
var User = require('./users/model.js');
var verify = require('./verify.js');

// db
var mongoose = require('mongoose');
mongoose.connect(config.dbPath);
var deepPopulate = require('mongoose-deep-populate');

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

if (process.env.ENV === undefined && config.autoSignin) {
  console.log("ENV UNDEFINED!");
  app.get('/', mock, function(req, res) {
    Exp.find({}, function(err, exps) {
      User.findOne({username:'hdh3000'}, function(err, user) {
        popExps = [];
        _.each(exps, function(exp){
          exp.deepPopulate(utils.expPopArray, function(err, exp){
            popExps.push(exp);
            //we iterate through the loop until we have populated all exps, then we send response..
            if(popExps.length === exps.length){
              res.render('index', {
                user : JSON.stringify(user),
                exps : JSON.stringify(popExps)
              });
            }
          });
        });
      });
    });
  });
}
else {
  app.get('/', verify, function(req, res) {
    Exp.find({}, function(err, exps) {
      User.findOne({googleId : req.user.googleId}, function(err, user) {
        var popExps = [];
        _.each(exps, function(exp){
          exp.deepPopulate(utils.expPopArray, function(err, exp){
            popExps.push(exp);
            //we iterate through the loop until we have populated all exps, then we send response..
            if(popExps.length === exps.length){
              res.render('index', {
                user : JSON.stringify(user),
                exps : JSON.stringify(popExps)
              });
            }
          });
        });
      });
    });
  });
}
app.use(express.static(path.join(__dirname, './client/public')));
app.use('/users', mock, userRouter);
app.use('/samples', mock, sampleRouter);

// start it up
console.log('agnition is listening on port ' + config.port + " " + process.env.ENV);

module.exports = app;
