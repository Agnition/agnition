var App = require('./containers/App.jsx');
var Dashboard = require('./components/Dashboard.jsx');
var NewExperiment = require('./components/NewExperiment.jsx');
var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('./stores/configureStore.jsx');
var ReactDOM = require('react-dom');

var reactRouter = require('react-router');
var Router = reactRouter.Router;
var Route = reactRouter.Route;
var Link = reactRouter.Link;

var store = configureStore();

ReactDOM.render(
  <Provider store={store}>
   <Router>
    <Route path='/' component={App}>
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/new-experiment' component={NewExperiment} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);