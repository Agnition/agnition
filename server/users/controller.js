'use strict';

var User = require('./model');

var getUser = function (req, res) {
  User.findOne({_id: req.params.id }, function(err, user) {
    if(err) { 
      res.send(err);
      throw err; 
    }
    res.send(user);
  });

};

var addUser = function (req, res) {
  var user = new User(req.body);
  user.save(function(err, user) {
    if(err) { 
      res.send(err);
      throw err; 
    }
    res.send(user);
  });

};

var deleteUser = function (req, res) {
  User.remove({_id: req.params.id }, function(err) {
    if(err) { 
      res.send(err);
      throw err; 
    }
    res.send('removed user');
  });
};


module.exports.getUser = getUser;
module.exports.addUser = addUser;
module.exports.deleteUser = deleteUser;