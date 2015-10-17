var createStore = require('redux').createStore;
var Immutable = require('immutable');
var rootReducer = require('../reducers/index.js');

module.exports = function(initialState) {
  var store = createStore(rootReducer, initialState);
  return store;
};
