import { combineReducers } from 'redux';
import Users from './Users';
import Dashboard from './Dashboard';
import Experiments from './Experiments';
import { routerStateReducer as router } from 'redux-router';
import Login from './Login';
import Hypothesis from './Hypothesis';

module.exports = combineReducers({
  Login: Login,
  Users: Users,
  Dashboard: Dashboard,
  Router: router, //make capitalized
  Experiments : Experiments,
  Hypothesis: Hypothesis
});
