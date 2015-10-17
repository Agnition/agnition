'use strict';
/*jshint camelcase: false, unused: false*/ 

var Exp = require('./model');
var User = require('../users/model');

var getExp = function (req, res) {
  // does not check the exp belongs to the user
  Exp.findOne({_id: req.params.exp_id }, function(err, exp) {
    if(exp === undefined) {
      res.sendStatus(204);
      return;
    }
    if(err) { 
      res.sendStatus(500);
      console.error(err);
      return;
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
  //ensure exp is valid before saving
  if(exp.validateSync()) {
    res.sendStatus(204);
    return;
  }
  //find user that exp belongs to
  User.findOne({_id: req.params.user_id}, function(err, user) {
    if(user === undefined) {
      res.sendStatus(204);
      return;
    }
    exp.save(function(err, exp) {
      if(err) { 
        res.sendStatus(500);
        console.error(err); 
        return;
      }
      User.update({_id: req.params.user_id}, {
        $push: {exps: exp._id}
      }, function(err, mongoRes) {
        if(err) { 
          res.sendStatus(500);
          console.error(err); 
          return;
        }
        res.send(exp);
      });
    });
  });
};

var deleteExp = function (req, res) {
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
