var Immutable = require('immutable');
const initialState = new Immutable.Map({});

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_USER') {
    return state.set('username', action.username).set('id', action.id);
  }
  if (action.type === 'LOG_OUT_USER') {
    return new Immutable.Map({});
  }
  return state;
};
