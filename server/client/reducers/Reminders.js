var Immutable = require('immutable');
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_REMINDERS') {
    return Immutable.fromJS(action.reminders);
  }
  return state;
};
