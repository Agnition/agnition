var Immutable = require('immutable');
var initialState = Immutable.Map({
  loggedIn: false
});

module.exports = function (state = initialState, action) {
  if (action.type === 'LOGIN') {
    return state.set('loggedIn', action.loggedIn);
  } else {
    return state;
  }
};