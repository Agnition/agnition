module.exports = function(state, action) {
  if (action.type === 'CREATE_EXP') {
    state.set('experiment', action.experiment);
  }
  else {
    return state;
  }
};
