var combineReducers = require('redux').combineReducers;
var User = require('./User');
var Dashboard = require('./Dashboard');
var Experiments = require('./Experiments');
var DepVars = require('./DepVars');
var IndVars = require('./IndVars');
var Measures = require('./Measures');
var Samples = require('./Samples');
var Reminders = require('./Reminders');
var Requests = require('./Requests');
var NewExperiment = require('./NewExperiment');
var Router = require('redux-router').routerStateReducer;

module.exports = combineReducers({
  Router: Router,
  User: User,
  Dashboard: Dashboard,
  NewExperiment: NewExperiment,
  Experiments : Experiments,
  DepVars : DepVars,
  IndVars : IndVars,
  Measures : Measures,
  Samples : Samples,
  Reminders : Reminders,
  Requests : Requests,
});
