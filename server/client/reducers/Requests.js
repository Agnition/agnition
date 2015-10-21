import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_REQUESTS') {
    return Immutable.fromJS(action.requests);
  }
  return state;
};
