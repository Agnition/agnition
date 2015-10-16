// var hReducer = require('hReducer');
module.exports = function(state, action) {
  if (action.type === 'inc') {
    return state + 1;
  }
  return state;
};
