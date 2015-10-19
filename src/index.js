import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// import { ReduxRouter } from 'redux-router';
import { Router, Route } from 'react-router';
import configureStore from './store/configureStore';
import App from './containers/App';
import Dashboard from './containers/Dashboard';
import NewExperiment from './components/NewExperiment';
import getState from 'redux';
import Login from './components/Login';
import About from './components/About';

// import { createHistory, useBasename } from 'history';

const store = configureStore();

function requireAuth(nextState, replaceState) {
  let auth = store.getState();

  if (!auth.loggedIn) {
    replaceState({ nextPathname: nextState.location.pathname }, '/login');
  }
}

render(
  (<Provider store={store}>
  <Router> 
    <Route path="/" component={App}>
      <Route path="/login"
             component={Login} />
      <Route path="/dashboard"
             component={Dashboard} onEnter={requireAuth}/>
      <Route path="/new-experiment"
             component={NewExperiment} />
    </Route>
      <Route path="/about"
             component={About} />
   </Router> 
  </Provider>),
  document.getElementById('root')
);
