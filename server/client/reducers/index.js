import { combineReducers } from 'redux';
import Users from './Users';
import Dashboard from './Dashboard';
import Experiments from './Experiments';
import { routerStateReducer as router } from 'redux-router';
import Hypothesis from './Hypothesis';

module.exports = combineReducers({
  Users: Users,
  Dashboard: Dashboard,
  Router: router, //make capitalized
  Experiments : Experiments,
  Hypothesis: Hypothesis
});
