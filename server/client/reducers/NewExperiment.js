var Immutable = require('immutable');
var initialState = Immutable.Map({
  name: '',
  hypothesis: '',
  cause: '',
  effect: '',
  indVar: Immutable.List(),
  depVar: Immutable.List()
});

module.exports = function(state, action) {
  state = state || initialState;
  if (action.type === 'SET_NAME') {
    return state.set('name', action.name);
  }
  if (action.type === 'SET_HYPOTHESIS') {
    return state.set('hypothesis', action.hypothesis);
  }
  if (action.type === 'SET_CAUSE') {
    return state.set('cause', action.cause);
  }
  if (action.type === 'SET_EFFECT') {
    return state.set('effect', action.effect);
  }
  if (action.type === 'MAKE_INDVAR') {
    return state.set('indVar', action.indVar);
  }
  if (action.type === 'MAKE_DEPVAR') {
    return state.set('depVar', action.depVar);
  }
  else {
    return state;
  }
};
