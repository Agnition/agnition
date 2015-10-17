var Immutable = require('immutable');
var initialState = Immutable.Map({});

module.exports = function(state, action) {
  state = state || initialState;
  if (action.type === 'SET_HYPOTHESIS') {
    return state.set('hypothesis', action.hypothesis);
  }
  if (action.type === 'SET_IV') {
    return state.set('iv', action.iv);
  }
  if (action.type === 'SET_DV') {
    return state.set('dv', action.dv);
  }
  else {
    return state;
  }
};
