import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_DEP_VARS') {
    return Immutable.fromJS(action.depVars);
  }
  if (action.type === 'CREATE_DEP_VAR') {
    return state.set(action.depVarId, Immutable.Map());
  }
  if (action.type === 'SET_NAME') {
    return state.setIn([action.depVarId, 'name'], action.name)
  }
  if (action.type === 'ADD_MEASURE') {
    var newMeasure = state.get(action.depVarId).get('measures').push(action.measureId);
    return state.setIn([action.depVarId, 'measures'], newMeasure);
  }
  return state;
};
