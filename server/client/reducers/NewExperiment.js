var Immutable = require('immutable');
const initialState = new Immutable.Map({
  question: 0,
  valid: false
});

module.exports = function(state = initialState, action) {
  if (action.type === 'GO_TO_NEXT_QUESTION') {
    var question = state.get('question');
    if (question < 5) {
      question++;
      state = state.set('question', question);
    }
  }
  if (action.type === 'GO_TO_PREV_QUESTION') {
    var question = state.get('question');
    if (question > 0) {
      question--;
      state = state.set('question', question);
    }
  }
  if (action.type === 'RESET_QUESTION_INDEX') {
    state = state.set('question', 0);
  }
  if (action.type === 'SET_VALIDITY') {
    state = state.set('valid', action.valid);
  }
  return state;
};
