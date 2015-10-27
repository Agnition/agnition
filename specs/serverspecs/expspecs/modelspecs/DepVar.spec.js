var expect = require('chai').expect;
var _ = require('underscore');

var DepVar = require('../../../../server/exps/models/DepVar');
var example = require('../../../../dummyData/normalizedDummyData.json').depVars;

describe('DepVar Model', function () {
  var ids, depVar; 
  beforeEach(function(){
    ids = Object.keys(example);
    depVar = new DepVar(example[ids[0]]);
  });
  it('should set the id from the example depVar', function () {
    expect(depVar._id.toString()).to.eql(example[ids[0]]._id);
  });

  it('should be setting all the right keys', function () {
    var expectedKeys = ["name","measures"];
    var actualKeys = Object.keys(depVar._doc);
    _.each(expectedKeys, function(key) {
      expect(actualKeys).to.contain(key);
      expect(depVar[key]).to.not.eql(undefined);
    });
  });
});
