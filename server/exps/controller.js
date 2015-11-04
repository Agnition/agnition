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
  Exp.findOne({_id: req.params.exp_id}).then(function(exp) {
    if (exp === null) {
      res.status(404);
      res.send('Not found');
    }
    return exp.deepPopulate(utils.expPopArray, function(err, exp) {
        if (err) {
          throw err;
        }
        res.send(exp);
      });
  }).catch(function(err) {
    // TODO : What is this?
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
        res.status(204);
        res.send('User not found');
        throw 'User not found';
      }
      else {
        return user;
      }
    });
    var promises = [
      Promise.all(_.map(req.body.experiments, function(experiment) {
        return new Exp(experiment).save();
      })),
      Promise.all(_.map(req.body.depVars, function(depVar) {
          return new DepVar(depVar).save();
        })),
      Promise.all(_.map(req.body.indVars, function(indVar) {
          return new IndVar(indVar).save();
        })),
      Promise.all(_.map(req.body.measures, function(measure) {
          return new Measure(measure).save();
        })),
      Promise.all(_.map(req.body.reminders, function(remind) {
          return new Remind(remind).save();
        })),
      Promise.all(_.map(req.body.requests, function(request) {
          return new Request(request).save();
        })),
      Promise.all(_.map(req.body.samples, function(sample) {
          return new Sample(sample).save();
        }))
    ];
  Promise.all(promises)
    .then(function(exp) {
      res.send(exp);
    })
    .catch(function(err) {
      res.status(400);
      res.send(err);
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
