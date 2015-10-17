var Redux = require('Redux');
var CreateExp= require('./CreateExp.jsx');
var Users = require('./Users.jsx'); // TODO : Rename to match verb convention
var Greeter = require('./Greeter.jsx'); // TODO : Rename to match verb convention
module.exports = Redux.combineReducers({ 
  // CreateExp : CreateExp, 
  Users : Users,
  // Greeter : Greeter
});
