module.exports = function(state = 0, action) {
  if (action.type === 'GO_TO_NEXT_QUESTION') {
    if(state < 5) {
      return state + 1;
    } else {
      console.log('you are are at the last question already');
    }
  }
  if (action.type === 'GO_TO_PREV_QUESTION') {
    if(state > 0) {
      return state - 1;
    } else {
      console.log('You are at the first question already');
    }
  }
  if (action.type === 'RESET_NEW_EXPERIMENT') {
    return 0;
  }
  return state;
};
