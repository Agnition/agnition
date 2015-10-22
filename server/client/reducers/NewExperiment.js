module.exports = function(state = 0, action) {
  if (action.type === 'GO_TO_NEXT_QUESTION') {
    console.log('adding one to exp reducer');
    return state + 1;
  }
  if (action.type === 'GO_TO_PREV_QUESTION') {
    console.log('decrementing one to exp reducer');
    return state - 1;
  }
  return state;
};
