var Immutable = require('immutable');
const initialState = new Immutable.Map();

module.exports = function(state = initialState, action) {
  if (action.type === 'SET_MEASURES' && action.measures) {
    return Immutable.fromJS(action.measures);
  }
  if (action.type === 'CREATE_MEASURE') {
    return state.set(action.measureId, Immutable.Map({
      list: new Immutable.List(),
      samples: new Immutable.List()
      }));
    }

  if (action.type === 'SET_KIND') {
    if (action.kind !== 'numeric') {
      state = state.setIn([action.measureId, 'unit'], null);
    }
    if (action.kind === 'qualitative') {
      state = state.setIn([action.measureId, 'list'], null);
    }
    if (action.kind === 'list') {
      state = state.setIn([action.measureId, 'list'], Immutable.List());
      state = state.setIn([action.measureId, 'scale'], null);
    }
    if (action.kind === 'numeric') {
      state = state.setIn([action.measureId, 'scale'], null);
      state = state.setIn([action.measureId, 'list'], null);
    }
    return state.setIn([action.measureId, 'kind'], action.kind);
  }

  if (action.type === 'SET_UNIT') {
    return state.setIn([action.measureId, 'unit'], action.unit);
  }
  if (action.type === 'SET_SCALE') {
    return state.setIn([action.measureId, 'scale'], action.scale);
  }
  if (action.type === 'SET_SCALE_DESCRIPTION_MIN') {
    return state.setIn([action.measureId, 'scaleDescriptionMin'], action.description);
  }
  if (action.type === 'SET_SCALE_DESCRIPTION_MIDDLE') {
    return state.setIn([action.measureId, 'scaleDescriptionMiddle'], action.description);
  }
  if (action.type === 'SET_SCALE_DESCRIPTION_MAX') {
    return state.setIn([action.measureId, 'scaleDescriptionMax'], action.description);
  }
  if (action.type === 'ADD_SAMPLE') {
    return state.updateIn([action.measureId, 'samples'], function(samples) {
      return samples.push(action.sampleId);
    });
  }
  if (action.type === 'ADD_LIST_ITEM') {
    action.item = action.item.trim();
    if (action.item.length === 0) {
      return state;
    }
    var newList = state.getIn([action.measureId, 'list']);
    // Only add unique items
    if (newList.indexOf(action.item) === -1) {
      newList = newList.push(action.item);
    }
    return state.setIn([action.measureId, 'list'], newList);
  }
  if (action.type === 'REMOVE_LIST_ITEM') {
    var newList = state.get(action.measureId).get('list');
    // Find index of item
    var itemIndex = newList.indexOf(action.item);
    // Remove if in list
    if (itemIndex >= 0) {
      newList = newList.splice(itemIndex, 1);
    }
    return state.setIn([action.measureId, 'list'], newList);
  }
  if (action.type === 'SET_MEASURE_NAME') {
    return state.setIn([action.measureId, 'name'], action.name);
  }
  return state;
};
