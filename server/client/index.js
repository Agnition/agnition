import React from 'react';
import { Router, Route } from 'react-router';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Import Routes
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import NewExperiment from './components/NewExperiment';
import ViewExperiment from './components/viewexperiment/ViewExperiment';
// import RunExperiment from './components/RunExperiment';
import About from './components/About';
import MyExps from './components/myexperiments/MyExperiments';
var  UserActions = require('./actions/Users.js');
// import NewUser from './components/NewUser';
// import Documentation from './components/Documentation';

const store = configureStore();
if (window.user) {
  store.dispatch(UserActions.setUser(window.user.username, window.user.googleId));
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
        <Route path='/about' component={About} />
        <Route path='/myexps' component={MyExps} />
        <Route path='/viewexp/:expid' component={ViewExperiment} />
        {/* <Route path='/newuser' component={NewUser} />
         <Route path='/documentation' component={Documentation} /> */}
      </Route>
    </Router>
  </Provider>
  ), document.getElementById('root')
);
