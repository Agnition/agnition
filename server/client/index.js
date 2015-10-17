var App            = require('./containers/App.jsx');
var React          = require('react');
var Provider       = require('react-redux').Provider;
var configureStore = require('./stores/configureStore.jsx');
var ReactDOM       = require('react-dom');
var ReduxRouter    = require('redux-router');

var store = configureStore();



import {
  ReduxRouter,
  routerStateReducer,
  reduxReactRouter
} from 'redux-router';

import { Route, Link } from 'react-router';
import { Provider, connect } from 'react-redux';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import createHistory from 'history/lib/createBrowserHistory';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <ReduxRouter>
            <Route path="/" component={App}>
              <Route path="parent" component={Parent}>
                <Route path="child" component={Child} />
                <Route path="child/:id" component={Child} />
              </Route>
            </Route>
          </ReduxRouter>
        </Provider>
        <DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
  </Provider>,
  document.getElementById('root')
);
