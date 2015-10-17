'use strict';

var Exp = require('./model');
var User = require('../users/model');

var getExp = function (req, res) {
  // does not check the exp belongs to the user
  Exp.findOne({_id: req.params.exp_id }, function(err, exp) {
    if(err) { 
      res.send(err);
      throw err; 
    }
    res.send(exp);
  });
};

var getAllExps = function (req, res) {
  User.findOne({_id: req.params.user_id})
    .populate('exps')
    .exec(function(err, user) {
      res.send(user.exps);
    });
};

var addExp = function (req, res) {
  var exp = new Exp(req.body);
  exp.save(function(err, exp) {
    if(err) { 
      res.send(err);
      throw err; 
    }
    User.update({_id: req.params.user_id}, {
      $push: {exps: exp._id}
    }, function(err, mongoRes) {
      if(err) { 
        res.send(err);
        throw err; 
      }
      res.send(exp);
    })
  });
};

var deleteExp = function (req, res) {
  Exp.remove({_id: req.params.exp_id }, function(err) {
    if(err) { 
      res.send(err);
      throw err; 
    }
    res.send('removed exp');
  });
};


module.exports.getExp = getExp;
module.exports.getAllExps = getAllExps;
module.exports.addExp = addExp;
module.exports.deleteExp = deleteExp;
