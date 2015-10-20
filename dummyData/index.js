var Exp = require('../server/exps/model');
var User = require('../server/users/model');
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');

// Experiment Data
var qualitative = require('./qualitative');
var list = require('./list');
var numeric = require('./numeric');

module.exports = function() {
  var addExp = function(exp, user) {
    exp = new Exp(exp);
    User.findOne({username : user}, function(err, nothing) {
      exp.save(function(err, exp) {
        if(err) {
          console.error(err);
          return;
        }
        User.update({username : user}, {
          $push: {exps: exp._id}
        }, function(err, mongoRes) {
          if(err) {
            console.error(err);
            return;
          }
          console.log(exp);
        });
      });
    });
  };

  var dbPath = 'mongodb://localhost/test';
  mongoose.connect(dbPath, function(){
    mongoose.connection.db.dropDatabase();

    new User({username: 'hdh3000'}).save(function(err){
      new User({username: 'mdboop'}).save(function(err){
        new User({username: 'stevenlundy'}).save(function(err){
          new User({username: 'marcusbuffett'}).save(function(err){
            User.findOne({username: 'hdh3000'}, function (err, user) {
              console.log(err);
              console.log("-------------------------------------------userID", user._id);
              fs.writeFileSync(__dirname +'/userid.json',JSON.stringify({"userId" : user._id},'utf8'));
              addExp(qualitative,'hdh3000');
              addExp(list,'hdh3000');
              addExp(numeric,'hdh3000');
            });

          });
        });
      });
    });
  });
};
