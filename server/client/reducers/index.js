import { combineReducers } from 'redux';
import User from './User';
import Dashboard from './Dashboard';
import Experiments from './Experiments';
import DepVars from './DepVars';
import IndVars from './IndVars';
import Measures from './Measures';
import Samples from './Samples';
import Reminders from './Reminders';
import Requests from './Requests';
import NewExperiment from './NewExperiment';
import { routerStateReducer as Router } from 'redux-router';

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
