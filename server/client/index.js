import React from 'react';
import { Router, Route } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//Import All Non-Auth Routes
import App from './screens/App';
import Dashboard from './screens/Dashboard';
// import About from './components/About';

// Import All New Experiment Routes
import NewExperiment from './screens/NewExperiment';
import Hypothesis from './containers/NewExperiment/Hypothesis';
import MyExps from './components/myexperiments/MyExperiments';
var ExperimentActions = require('./actions/Experiments.js');
var IndependentVariableActions = require('./actions/IndependentVars.js');
var DependentVariableActions = require('./actions/DependentVariables.js');
var SampleActions = require('./actions/Samples.js');
var MeasureActions = require('./actions/Measures.js');
var RequestActions = require('./actions/Requests.js');
var ReminderActions = require('./actions/Reminders.js');
var UserActions = require('./actions/Users.js');
var normalize = require('./utils/normalize.js');

//Import All View Experiments Routes
import ViewExperiment from './components/viewexperiment/ViewExperiment';
// import RunExperiment from './components/RunExperiment';
// import EditExperiment from '../components/EditExperiment';
// import NewUser from './components/NewUser';
// import Documentation from './components/Documentation';

const store = configureStore();
if (window.user && window.exps) {
  store.dispatch(UserActions.setUser(window.user.username, window.user.googleId));

  var normData = normalize({ exps : window.exps });
  ExperimentActions.setExperiments(normData.entities.experiments);
  DependentVariableActions.setDepVars(normData.entities.dependentVars);
  IndependentVariableActions.setIndVars(normData.entities.independentVars);
  MeasureActions.setMeasures(normData.entities.measures);
  RequestActions.setRequests(normData.entities.requests);
  ReminderActions.setReminders(normData.entities.reminders);
}

render((
  <Provider store={store}>
    <Router>
      <Route path='/' component={App}>
        <Route path='/:userid/dashboard' component={Dashboard} />
          {/*<Route path='/:userid/view/:expid' component={ViewExperiment} />*/}
          {/* <Route path='/:userid/run/:expid' component={RunExperiment} /> */}
          {/*<Route path='/:userid/edit/:expid' component={EditExperiment} />*/}
        <Route path='/:userid/newexp' component={NewExperiment} />
        {/*<Route path='/about' component={About} />*/}
        <Route path='/myexps' component={MyExps} />
        <Route path='/viewexp/:expid' component={ViewExperiment} />
        {/* <Route path='/newuser' component={NewUser} />
         <Route path='/documentation' component={Documentation} /> */}
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
