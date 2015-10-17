var App = require('./containers/App.jsx');
var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('./stores/configureStore.jsx');
var ReactDOM = require('react-dom');
// var ReduxRouter    = require('redux-router').ReduxRouter;
// var Link           = require('redux-router').Link;
//TODO: Implement DevTools and Browser History
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// import createHistory from 'history/lib/createBrowserHistory';

var store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />

  </Provider>,
  document.getElementById('root')
);

    // <ReduxRouter>
    //   <Route path="/" component={App}>
    //     <Route path="landing" component={Parent}>
    //       <Route path="home" component={Child} />
    //       <Route path="home/:id" component={Child} />
    //     </Route>
    //   </Route>
    // </ReduxRouter>
    // <DebugPanel top right bottom>
    //   <DevTools store={store} monitor={LogMonitor} />
    // </DebugPanel>
