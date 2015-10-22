import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_EXPERIMENTS') {
    return Immutable.fromJS(action.experiments);
  }
  if (action.type === 'CREATE_EXPERIMENT') {
    return state.set(action.key, Immutable.Map());
  }
  if (action.type === 'SET_HYPOTHESIS') {
    return state.setIn([action.key, 'hypothesis'], action.hypothesis)
  }
  if (action.type === 'SET_CAUSE') {
    return state.setIn([action.key, 'cause'], action.cause)
  }
  if (action.type === 'SET_EFFECT') {
    return state.setIn([action.key, 'effect'], action.effect)
  }
  if (action.type === 'SET_NAME') {
    return state.setIn([action.key, 'name'], action.name)
  }
  if (action.type === 'ADD_DEP_VAR') {
    var newDepVars = state.get(action.key).get('depVars').push(action.depVarKey);
    return state.setIn([action.key, 'depVars'], newDepVars);
  }
  if (action.type === 'ADD_IND_VAR') {
    var newIndVars = state.get(action.key).get('indVars').push(action.indVarKey);
    return state.setIn([action.key, 'indVars'], newIndVars);
  }

  return state;
};

