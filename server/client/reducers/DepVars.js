var Immutable = require('immutable');
const initialState = new Immutable.Map();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_DEP_VARS') {
    return Immutable.fromJS(action.depVars);
  }
  if (action.type === 'CREATE_DEP_VAR') {
    return state.set(action.depVarId, Immutable.Map({
      measures: new Immutable.List()
    }));
  }
  if (action.type === 'SET_DEP_VAR_NAME') {
    return state.setIn([action.depVarId, 'name'], action.name);
  }
  if (action.type === 'ADD_MEASURE') {
    var newMeasure = state.getIn([action.depVarId, 'measures']).push(action.measureId);
    return state.setIn([action.depVarId, 'measures'], newMeasure);
  }
  return state;
};
