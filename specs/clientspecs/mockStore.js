var Immutable = require('immutable');

function createMockStoreObject(state) {
  return {
    subscribe: function() {
      return {};
    },
    dispatch:function() {
      return {};
    },
    getState: function() {
      return this.state;
    }.bind(this)
  };
}

module.exports = function mockStore(jsObject){
  return createMockStore(Immutable.from.JS(jsObject));
};


