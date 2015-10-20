import Immutable from 'immutable';
const initialState = new Immutable.Map({
  username : 'Fred'
});

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_USER') {
    return state.set('username', action.username);
  } else {
    return state;
  }
};
