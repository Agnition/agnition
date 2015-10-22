var testUtils = require('../../server/client/utils/componentUtils.js');
var Immutable = require('immutable');
var expect = require('chai').expect;

describe('mapIdsToObjs', function () {
  var imObj, idArray;
  beforeEach(function(){
    var obj = {
      a : {b:'c'},
      b : {c:'d'}
    };
    imObj = Immutable.fromJS(obj);
    idArray = ['a','b'];

  });
  it('should return a set of objects based on id inputs', function () {
    var result = testUtils.mapIdsToObjs(idArray,imObj);
    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('object');
    expect(result[0]).to.be.an('object');
  });
});

describe('divCollection(subElementobjects, subElementConstructor, propKey)', function () {
  xit('should properly output the divCollection', function () {
    //this is pending need to have larger conversation about this utility function
  });


});
