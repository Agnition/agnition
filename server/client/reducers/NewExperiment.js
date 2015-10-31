module.exports = function(state = 0, action) {
  if (action.type === 'GO_TO_NEXT_QUESTION') {
    if (state < 5) {
      return state + 1;
    }
    return state;
  }
  if (action.type === 'GO_TO_PREV_QUESTION') {
    if (state > 0) {
      return state - 1;
    }
    return state;
  }
  if (action.type === 'RESET_QUESTION_INDEX') {
    return 0;
  }
  return state;
};
