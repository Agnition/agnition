import Immutable from 'immutable';
const initialState = new Immutable.List(
  //exp object 

);//.of( 1, 2, 3);

module.exports = function(state = initialState, action) {
  // if (action.type === 'CHANGE_DEP_VAR') {
  //   state.get(action.key).set('depVar').name)

  //   return state.set('user', action.user);

  // } else {
    return state;
  // }
};
