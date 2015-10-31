var Immutable = require('immutable');
const initialState = new Immutable.Map();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_EXPERIMENTS') {
    return Immutable.fromJS(action.experiments);
  }
  if (action.type === 'CREATE_EXPERIMENT') {
    return state.set(action.expId, Immutable.Map({
      _id: action.expId,
      active: true,
      depVars: new Immutable.List(),
      indVars: new Immutable.List(),
    }));
  }
  if (action.type === 'DELETE_EXPERIMENT') {
    return state.delete(action.expId);
  }
  if (action.type === 'SET_EXPERIMENT_KIND') {
    return state.setIn([action.expId, 'kind'], action.kind);
  }
  if (action.type === 'SET_ACTIVE') {
    return state.setIn([action.expId, 'active'], action.active);
  }
  if (action.type === 'SET_HYPOTHESIS') {
    return state.setIn([action.expId, 'hypothesis'], action.hypothesis);
  }
  if (action.type === 'SET_CAUSE') {
    return state.setIn([action.expId, 'cause'], action.cause);
  }
  if (action.type === 'SET_EFFECT') {
    return state.setIn([action.expId, 'effect'], action.effect);
  }
  if (action.type === 'SET_NAME') {
    return state.setIn([action.expId, 'name'], action.name);
  }
  if (action.type === 'ADD_DEP_VAR') {
    return state.updateIn([action.expId, 'depVars'], function (list) {
      return list.push(action.depVarId);
    });
  }
  if (action.type === 'ADD_IND_VAR') {
    return state.updateIn([action.expId, 'indVars'], function (list) {
      return list.push(action.indVarId);
    });
  }
  return state;
};

