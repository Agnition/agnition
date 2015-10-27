// var Exp = require('../server/exps/model');
var User = require('../server/users/model');
var Exp = require('../server/exps/models/Exp');
var DepVar = require('../server/exps/models/DepVar');
var IndVar = require('../server/exps/models/IndVar');
var Measure = require('../server/exps/models/Measure');
var Remind = require('../server/exps/models/Remind');
var Request = require('../server/exps/models/Request');
var Sample = require('../server/exps/models/Sample');
var mongoose = require('mongoose');
var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var data = require('./normalizedDummyData.json');
console.log("-------------------------------------------",data);


var dbPath = 'mongodb://localhost/test';
module.exports = function() {
  mongoose.connect(dbPath, function(){
    mongoose.connection.db.dropDatabase();

    new User({username: 'hdh3000'}).save()
      .then(function(){
        new User({username: 'mdboop'}).save();
      })
      .then(function(){
        new User({username: 'stevenlundy'}).save();
      })
      .then(function(){
        new User({username: 'marcusbuffett'}).save();
      })
      .then(function(){
        new User({username: 'marcusbuffett'}).save();
      })
      .then(function(user) {
        console.log("-------------------------------------------user id",user._id);
        _.each(data.experiments, function(experiment) {
          new Exp(experiment).save().then(function(exp){
            console.log("----------------------------------------ID---",exp._id);
            User.update({username : 'hdh3000'}, {
              $push: {exps: exp._id} }).exec();
          });
        });
      })
      .then(function(exp){
        _.each(data.depVars, function(depVar) {
          new DepVar(depVar).save();
        });
      })
      .then(function(){
        _.each(data.indVars, function(indVar) {
          new IndVar(indVar).save();
        });
      })
      .then(function(){ 
        _.each(data.measures, function(measure) {
          new Measure(measure).save();
        });
      })
      .then(function(){ 
        _.each(data.reminders, function(remind) {
          new Remind(remind).save();
        });
      })
      .then(function(){ 
        _.each(data.requests, function(request) {
          new Request(request).save();
        });
      })
      .then(function(){ 
        _.each(data.samples, function(sample) {
          new Sample(sample).save();
        });      
      }).then(function(){
        console.log("------------------------------------------- clean db Success");
      }).catch(function(err){
        console.log("-------------------------------------------clean db fail");
        console.log(err);
    });
  }); 
};



