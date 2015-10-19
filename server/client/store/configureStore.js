import { createStore } from 'redux';
import rootReducer from '../reducers/index.js';
import Immutable from 'immutable';
import { applyMiddleware, compose } from 'redux';
// // import { reduxReactRouter } from 'redux-router';
import { devTools } from 'redux-devtools';
// // import createHistory from 'history/lib/createBrowserHistory';
// // import routes from '../routes';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  // reduxReactRouter({ routes, createHistory }),
  applyMiddleware(createLogger()),
  devTools()
)(createStore);

// var initialState = Immutable.Map({
//   auth: false
// });

module.exports = function(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
