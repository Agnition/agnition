import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_DEP_VARS') {
    return Immutable.fromJS(action.depVars);
  }
    return state;
};
