var Redux = require('Redux');
var UserHome  = require('./UserHome.jsx');
var Users = require('./Users.jsx');
var Hypothesis = require('./Hypothesis.jsx');
module.exports = Redux.combineReducers({ 

  Users : Users,
  Hypothesis: Hypothesis,
  UserHome: UserHome

});
