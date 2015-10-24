import Immutable from 'immutable';
const initialState = new Immutable.Map();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_EXPERIMENTS') {
    return Immutable.fromJS(action.experiments);
  }
  if (action.type === 'CREATE_EXPERIMENT') {
    return state.set(action.expId, Immutable.Map({
      depVars: new Immutable.List(),
      indVarsIds: new Immutable.List(),
    }));
  }
  if (action.type === 'SET_HYPOTHESIS') {
    return state.setIn([action.expId, 'hypothesis'], action.hypothesis)
  }
  if (action.type === 'SET_CAUSE') {
    return state.setIn([action.expId, 'cause'], action.cause)
  }
  if (action.type === 'SET_EFFECT') {
    return state.setIn([action.expId, 'effect'], action.effect)
  }
  if (action.type === 'SET_NAME') {
    return state.setIn([action.expId, 'name'], action.name)
  }
  if (action.type === 'ADD_DEP_VAR') {
    return state.updateIn([action.expId, 'depVars'], function (list) {
      return list.push(action.depVarId);
    });
  }
  if (action.type === 'ADD_IND_VAR') {
    var newIndVarsIds = state.getIn([action.expId, 'indVarsIds']).push(action.indVarId);
    return state.setIn([action.expId, 'indVarsIds'], newIndVarsIds);
  }

  return state;
};

