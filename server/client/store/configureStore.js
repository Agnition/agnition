var createStore = require('redux').createStore;
var rootReducer = require('../reducers/index.js');
var applyMiddleware = require('redux').applyMiddleware;
var compose = require('redux').compose;
var reduxReactRouter = require('redux-router').reduxReactRouter;
var createHistory = require('history/lib/createBrowserHistory');
var thunk = require('redux-thunk');
var createLogger = require('redux-logger');

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory }),
  applyMiddleware(createLogger())
)(createStore);

module.exports = function(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
};
