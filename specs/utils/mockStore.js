var Immutable = require('immutable');
var _ = require('underscore');

var createMockStoreObject = function(state) {
  return {
    subscribe: function() {
      return {};
    },
    dispatch:function() {
      return {};
    },
    getState: function() {
      return state;
    }
  };
};

module.exports = function mockStore(jsObject){
  // this maps the js object that gets passed in to an immutable object
  // it is important to keep the top level key as plain js so that they can be accessed..
  var imObj = {} 
  _.each(jsObject, function(item, key){
    imObj[key] = Immutable.fromJS(item);
  });
  return createMockStoreObject(imObj);
};


