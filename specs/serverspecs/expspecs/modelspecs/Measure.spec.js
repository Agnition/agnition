var expect = require('chai').expect;
var _ = require('underscore');

var Measure = require('../../../../server/exps/models/Measure');
var example = require('../../../../dummyData/normalizedDummyData.json').measures;

describe('Measure Model', function () {
  var ids, measures; 
  beforeEach(function(){
    ids = Object.keys(example);
    measures = new Measure(example[ids[0]]);
  });
  it('should set the id from the example measures', function () {
    expect(measures._id.toString()).to.eql(example[ids[0]]._id);
  });

  it('should be setting all the right keys', function () {
    var expectedKeys = ["unit","requests","samples","list","scale"];
    var actualKeys = Object.keys(measures._doc);
    _.each(expectedKeys, function(key) {
      expect(actualKeys).to.contain(key);
      expect(measures[key]).to.not.eql(undefined);
    });
  });

  it('should not accept bad data', function () {
    example[ids[1]].unit = 'foot';
    var badMeasure = new Measure(example[ids[1]]);
    expect(badMeasure.validateSync()).not.eql(undefined);
  });
});
