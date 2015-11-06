import React from 'react';
import { Router, Route } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

//Import All Non-Auth Routes
import App from './screens/App';
// import About from './components/About';

// Import All New Experiment Routes
import NewExperiment from './screens/NewExperiment';
import Hypothesis from './containers/NewExperiment/Hypothesis';
import MyExps from './components/myexperiments/MyExperiments';
import SampleWrapper from './containers/RunAdHocExperiment/SampleWrapper';
import RecordRunOfAdHocExperiment from './containers/RunAdHocExperiment/DepVars';
var ExperimentActions = require('./actions/Experiments.js');
var IndVariableActions = require('./actions/IndVars.js');
var DepVariableActions = require('./actions/DepVars.js');
var SampleActions = require('./actions/Samples.js');
var MeasureActions = require('./actions/Measures.js');
var RequestActions = require('./actions/Requests.js');
var ReminderActions = require('./actions/Reminders.js');
var UserActions = require('./actions/Users.js');
var normalize = require('./utils/normalize.js');
var unNormalize = require('./utils/un-normalize.js');


//Import All View Experiments Routes
import ViewExperiment from './components/viewexperiment/ViewExperiment';
import ClosedExperiment from './components/viewexperiment/ClosedExperiment';

const store = configureStore();
if (window.user && window.exps) {
  store.dispatch(UserActions.setUser(window.user.username, window.user.googleId));

  var normData = normalize({ exps : window.exps });
  store.dispatch(ExperimentActions.setExperiments(normData.entities.experiments || {}));
  store.dispatch(DepVariableActions.setDepVars(normData.entities.depVars || {}));
  store.dispatch(IndVariableActions.setIndVars(normData.entities.indVars || {}));
  store.dispatch(MeasureActions.setMeasures(normData.entities.measures || {}));
  store.dispatch(RequestActions.setRequests(normData.entities.requests || {}));
  store.dispatch(ReminderActions.setReminders(normData.entities.reminders || {}));
  store.dispatch(SampleActions.setSamples(normData.entities.samples || {}));
}
window.store = store;
render((
  <Provider store={store}>
    <Router>
      <Route path='/' component={App}>
        <Route path='/newexp' component={NewExperiment} />
        <Route path='/myexps' component={MyExps} />
        <Route path='/viewexp/:expid' component={ViewExperiment} />
        <Route path='/closedexp/:expid' component={ClosedExperiment} /> 
        <Route path='/sample/:expid/adhoc' component = {SampleWrapper} />
        <Route path='/sample/:expid/:sampleid/adhoc/record' component = {RecordRunOfAdHocExperiment} />
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
