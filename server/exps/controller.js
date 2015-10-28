var User = require('../users/model');

var Exp = require('./models/Exp');
var DepVar = require('./models/DepVar');
var IndVar = require('./models/IndVar');
var Measure = require('./models/Measure');
var Remind = require('./models/Remind');
var Request = require('./models/Request');
var Sample = require('./models/Sample');
var _ = require('underscore');
var deepPopulate = require('mongoose-deep-populate');
var utils = require('../utils');

var getExp = function (req, res) {
  // does not check the exp belongs to the user
  Exp.findOne({_id: req.params.exp_id}).then(function(exp){
    if(exp === null) {
      throw "exp is undefined";
    }
    return exp.deepPopulate(utils.expPopArray, function(err, exp){
        if(err) {
          throw err;
        }
        res.send(exp);
      });
  }).catch(function(err){
    if(err === "exp is undefined"){
      res.sendStatus(204);
    } else {
      res.sendStatus(500);
      console.log("----GET EXP ERR----\n", err);
    }
  });
};

var getAllExps = function (req, res) {
  User.findOne({googleId: req.params.user_id})
    .then(function(user){
      return user.deepPopulate(utils.userPopArray, function(err, user){
          if(err) {
            res.send(500);
            console.log("----GET ALL EXPS ERR----\n", err);
            return;
          }
          res.send(user.exps);
          return;
      });
    });
};

var addExp = function (req, res) {
  User.findOne({googleId: req.params.user_id}).exec()
    .then(function(user) {
      if (user === undefined) {
        res.sendStatus(204);
        throw 'user not defined';
      } else return user;  
    })
    .then(function(user){
      _.each(req.body.experiments, function(experiment) {
        new Exp(experiment).save();
      });
    })
    .then(function(exp){
      _.each(req.body.depVars, function(depVar) {
        new DepVar(depVar).save();
      });
    })
    .then(function(){
      _.each(req.body.indVars, function(indVar) {
        new IndVar(indVar).save();
      });
    })
    .then(function(){ 
      _.each(req.body.measures, function(measure) {
        new Measure(measure).save();
      });
    })
    .then(function(){ 
      _.each(req.body.reminders, function(remind) {
        new Remind(remind).save();
      });
    })
    .then(function(){ 
      _.each(req.body.requests, function(request) {
        new Request(request).save();
      });
    })
    .then(function(){ 
      _.each(req.body.samples, function(sample) {
        new Sample(sample).save();
      });      
    }).then(function(){
      res.sendStatus(200);
    }).catch(function(err){
      res.send(500);
      console.log(err);
  });
};

var deleteExp = function (req, res) {
  //TODO: dosen't remove it from user...
  Exp.remove({_id: req.params.exp_id }, function(err) {
    if(err) { 
      res.sendStatus(500);
      console.error(err); 
      return;
    }
    res.send('removed exp');
  });
};


module.exports.getExp = getExp;
module.exports.getAllExps = getAllExps;
module.exports.addExp = addExp;
module.exports.deleteExp = deleteExp;
