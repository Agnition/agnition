var Immutable = require('immutable');
const initialState = new Immutable.Map({});

module.exports = function(state = initialState, action) {
  if (action.type === 'CREATE_EXPERIMENT') {
    return state.set('newExperiment', action.newExperiment);
  }
  return state;
};
