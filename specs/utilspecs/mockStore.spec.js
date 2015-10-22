var mockStore = require('./mockStore');
var mocha = require('mocha');
var expect = require('chai').expect;
var Immutable = require('immutable');

describe('mockStore(jsObject)', function () {
  var obj, mockStoreObj;
  beforeEach(function(){
   obj = {
     a: {'1': 1,
         '2': 2,
         '3': [3,4,5,6]
     },
     b : [7,8,9,10]
   };
   mockStoreObj = mockStore(obj);

  });
  it('should return an object the correct props for redux', function () {
    expect(mockStoreObj.subscribe).to.be.a('function');
    expect(mockStoreObj.dispatch).to.be.a('function');
    expect(mockStoreObj.getState).to.be.a('function');
  });
  describe('MockStoreObj', function () {
    it('should return a jsObject when getState is called', function () {
      var state = mockStoreObj.getState();
      expect(state).to.be.an('object');
    });
    describe('MockStateObj', function () {
      it('should be correctly mapped to immutable data structures', function () {
        var state = mockStoreObj.getState();
        //checks top level keys
        expect(Immutable.Map.isMap(state.a)).to.be.true;
        expect(Immutable.List.isList(state.b)).to.be.true;
        //check lower level key
        expect(Immutable.List.isList(state.a.get('3'))).to.be.true;
      });
    });
  });
});

