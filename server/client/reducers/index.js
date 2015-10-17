var Redux      = require('Redux');
// var CreateExp  = require('./CreateExp.jsx');
var Users      = require('./Users.jsx');
var Hypothesis = require('./Hypothesis.jsx');
module.exports = Redux.combineReducers({ 

  Users : Users,
  Hypothesis: Hypothesis,

});
