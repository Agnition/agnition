var App = require('./containers/App.jsx');
var React = require('react');
var Provider = require('react-redux').Provider;
var configureStore = require('./stores/configureStore.jsx');
var ReactDOM = require('react-dom');

console.log(App);
var store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
