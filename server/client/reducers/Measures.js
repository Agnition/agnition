import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_MEASURES') {
    return Immutable.fromJS(action.measures);
  } else {
    return state;
  }
};
