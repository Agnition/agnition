module.exports = function(state, action) {
  if (action.type === 'SET_HYPOTHESIS') {
    state.set('hypothesis', action.hypothesis);
  }
  else {
    return state;
  }
};
