var Immutable = require('immutable');
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_REQUESTS' && action.requests) {
    return Immutable.fromJS(action.requests);
  }
  return state;
};
