module.exports = function(state, action) {
  if (action.type === 'SET_DATE') {
    state.set('date', action.date);
  }
  else {
    return state;
  }
};
