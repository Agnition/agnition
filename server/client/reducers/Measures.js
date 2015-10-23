import Immutable from 'immutable';
const initialState = new Immutable.List();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_MEASURES') {
    return Immutable.fromJS(action.measures);
  }
  if (action.type === 'CREATE_MEASURE') {
    return state.set(action.measureId, Immutable.Map());
  }
  if (action.type === 'SET_KIND') {
    return state.setIn([action.measureId, 'kind'], action.kind)
  }
  if (action.type === 'SET_UNIT') {
    return state.setIn([action.measureId, 'unit'], action.unit)
  }
  if (action.type === 'SET_SCALE') {
    return state.setIn([action.measureId, 'scale'], action.scale)
  }
  if (action.type === 'ADD_LIST_ITEM') {
    var newList = state.get(action.measureId).get('list');
    // Only add unique items
    if (newList.indexOf(action.item) === -1) {
      newList.push(action.item)
    }
    return state.setIn([action.measureId, 'list'], newList);
  }
  if (action.type === 'REMOVE_LIST_ITEM') {
    var newList = state.get(action.measureId).get('list');
    // Find index of item
    var itemIndex = newList.indexOf(action.item);
    // Remove if in list
    if (itemIndex >= 0) {
      newList.splice(itemIndex, 1);
    }
    return state.setIn([action.measureId, 'list'], newList);
  }
  return state;
};
