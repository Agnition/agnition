var Immutable = require('immutable');
var initialState = Immutable.Map({
  name: '',
  hypothesis: '',
  cause: '',
  effect: '',
  questionIndex: 0,
  indVar: Immutable.List(),
  depVar: Immutable.List()
});

module.exports = function(state, action) {
  state = state || initialState;
  if (action.type === 'GO_TO_NEXT_QUESTION') {
    return state.set('questionIndex', ++action.questionIndex);
  }
  if (action.type === 'GO_TO_PREV_QUESTION') {
    if (action.questionIndex > 0) {
      return state.set('questionIndex', --action.questionIndex);
    }
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
  else {
    return state;
  }
};
