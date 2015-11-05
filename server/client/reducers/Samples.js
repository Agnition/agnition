var Immutable = require('immutable');
const initialState = new Immutable.Map();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_SAMPLES') {
    return Immutable.fromJS(action.samples);
  }
  if (action.type === 'SET_IND_VAR_OPTION_ON_SAMPLE') {
    return state.updateIn([action.sampleId, 'indVarStates'], function(map) {
      return map.set(action.indVarId, action.optionValue);
    });
  }
  if (action.type === 'CREATE_SAMPLE') {
     return state.set(action.sampleId, new Immutable.Map({
        indVarStates: new Immutable.Map()
      }));
  }
  if (action.type === 'INSERT_SAMPLE') {
    return state.set(action.sample._id, Immutable.fromJS(action.sample));
  }
  return state;
};
