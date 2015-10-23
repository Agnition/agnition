import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_IND_VARS') {
    return Immutable.fromJS(action.indVars);

  } else if(action.type ==='SET_NAME') {
      return state.setIn([action.indVarId],'name', action.name);

  } else if(action.type ==='SET_ACTIONS_PER_TRIAL') {
      return state.setIn([action.indVarId],'actionsPerTrial', action.actionsPerTrial);

  } else if(action.type ==='SET_NUM_TRIALS') {
      return state.setIn([action.indVarId],'numTrials', action.numTrials);

  } else if(action.type ==='SET_RANDOMIZED') {
      return state.setIn([action.indVarId],'randomized', action.randomized);

  } else if(action.type ==='PUSH_OPTION') {
      return state.setIn([action.indVarId],'option', action.option) ;

  } else {
    return state;
  }
};





  // state = state || initialState;
  // if (action.type === 'SET_HYPOTHESIS') {
  //   return state.set('hypothesis', action.hypothesis);
  // }
