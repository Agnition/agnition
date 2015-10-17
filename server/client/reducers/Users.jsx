var Immutable = require('immutable');
var initialState = Immutable.Map({
  username : 'Fred'
});
console.log(initialState.toString());
module.exports = function(state, action) {
  state = state || initialState;
  if (action.type === 'SET_USER') {
    return state.set('user', action.user);
  }
  else {
    return state;
  }
};
