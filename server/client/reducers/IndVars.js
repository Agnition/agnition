var Immutable = require('immutable');
const initialState = new Immutable.Map();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_IND_VARS') {
    return Immutable.fromJS(action.indVars);
  }
  if (action.type === 'CREATE_IND_VAR') {
      return state.set(action.indVarId, new Immutable.Map({
        options: new Immutable.List()
      }));
  }
  if (action.type === 'SET_INDVAR_NAME') {
      return state.setIn([action.indVarId, 'name'], action.name);
  }
  if (action.type === 'SET_INDVAR_ACTIONS_PER_TRIAL') {
      return state.setIn([action.indVarId, 'actionsPerTrial'], action.actionsPerTrial);
  }
  if (action.type === 'SET_INDVAR_NUM_TRIALS') {
      return state.setIn([action.indVarId, 'numTrials'], action.numTrials);
  }
  if (action.type === 'SET_INDVAR_RANDOMIZED') {
      return state.setIn([action.indVarId, 'randomized'], action.randomized);
  }
  if (action.type === 'ADD_INDVAR_OPTION') {
      action.option = action.option.trim();
      if (action.option.length === 0) {
        return state;
      }
      var newOptions = state.get(action.indVarId).get('options');
      // Only add unique items
      if (newOptions.indexOf(action.option) === -1) {
        newOptions = newOptions.push(action.option);
      }
      return state.setIn([action.indVarId, 'options'], newOptions);
  }
  if (action.type === 'REMOVE_INDVAR_OPTION') {
      var newOptions = state.get(action.indVarId).get('options');
      // Find index of item
      var optionIndex = newOptions.indexOf(action.option);
      // Remove if in list
      if (optionIndex >= 0) {
        newOptions = newOptions.splice(optionIndex, 1);
      }
      return state.setIn([action.indVarId, 'options'], newOptions);
  }
  return state;
};
