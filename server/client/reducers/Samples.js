import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_SAMPLES') {
    return Immutable.fromJS(action.samples);
  
  } else if (action.type === 'SET_IND_VAR_OPTION_ON_SAMPLE') {
    //needs to be hooked up properly, action is fired..
    var a = state.updateIn([action.sampleId, 'indVarStates'], function(map){
      return map.set(action.indVarId, action.optionIndex);
    });
    console.log('%c--> look here' , 'font-size:15px; padding-right:20px; color:white; background-color: black');﻿
    console.dir(a.toJS);
    return a;
  }
  return state;
};

  // } else if(action.type ==='PUSH_INDVAR_OPTION') {
  //     return state.updateIn([action.indVarId, "options"], function(list) {
  //       return list.push(action.option);
  //     });
// sampleId: sampleId,
// indVarId: indVarId,
// optionIndex: optionIndex
