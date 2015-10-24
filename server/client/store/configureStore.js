import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';
import { applyMiddleware, compose } from 'redux';
var reduxReactRouter = require('redux-router').reduxReactRouter;
import { devTools } from 'redux-devtools';
import createHistory from 'history/lib/createBrowserHistory';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory }),
  applyMiddleware(createLogger()),
  devTools()
)(createStore);

module.exports = function(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  return store;
};
