module.exports = function(state = 0, action) {
  if (action.type === 'GO_TO_NEXT_QUESTION') {
    return state + 1;
  }
  if (action.type === 'GO_TO_PREV_QUESTION') {
    return state - 1;
  }
  return state;
};
