import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_SAMPLES') {
    return Immutable.fromJS(action.samples);
  }
  return state;
};
