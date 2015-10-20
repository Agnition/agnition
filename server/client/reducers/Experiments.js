import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_EXPERIMENTS') {
    console.log("SETTING STATE!");

    return Immutable.fromJS(action.experiments.result.exps);

  } else {
    return state;
  }
};
