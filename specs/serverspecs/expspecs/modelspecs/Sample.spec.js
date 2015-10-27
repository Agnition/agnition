var expect = require('chai').expect;
var _ = require('underscore');

var Sample = require('../../../../server/exps/models/Sample');
var example = require('../../../../dummyData/normalizedDummyData.json').samples;

describe('Sample Model', function () {
  var ids, sample; 
  beforeEach(function(){
    ids = Object.keys(example);
    sample = new Sample(example[ids[0]]);
  });
  it('should set the id from the example sample', function () {
    expect(sample._id.toString()).to.eql(example[ids[0]]._id);
  });

  it('should be setting all the right keys', function () {
    var expectedKeys = ["value","indVarStates","time"];
    var actualKeys = Object.keys(sample._doc);
    _.each(expectedKeys, function(key) {
      expect(actualKeys).to.contain(key);
      expect(sample[key]).to.not.eql(undefined);
    });
  });
});
