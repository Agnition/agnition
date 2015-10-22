var Immutable = require('immutable');

var initialState = Immutable.Map({
  name: '',
  hypothesis: '',
  cause: '',
  effect: '',
  questionIndex: 0,
  depVar: Immutable.List(),
  indVar: Immutable.List()
});

module.exports = function(state, action) {
  state = state || initialState;
  if (action.type === 'GO_TO_NEXT_QUESTION') {
    var questionIndex = state.get('questionIndex');
    return state.set('questionIndex', ++questionIndex);
  }
  if (action.type === 'GO_TO_PREV_QUESTION') {
    var questionIndex = state.get('questionIndex');
    return state.set('questionIndex', --questionIndex);
  }
  if (action.type === 'SET_NAME') {
    return state.set('name', action.name);
  }
  if (action.type === 'SET_OVERVIEW') {
    return state.set('hypothesis', action.hypothesis)
                .set('cause', action.cause)
                .set('effect', action.effect);
  }
  if (action.type === 'MAKE_INDVAR') {
    return state.set('indVar', action.indVar);
  }
  if (action.type === 'MAKE_DEPVAR') {
    return state.set('depVar', action.depVar);
  }
  if (action.type === 'SET_DEPVAR_KIND') {
    return state.set('');
  }
  return state;
};
