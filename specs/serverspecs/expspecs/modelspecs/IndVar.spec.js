var expect = require('chai').expect;
var _ = require('underscore');

var IndVar = require('../../../../server/exps/models/IndVar');
var example = require('../../../../dummyData/normalizedDummyData.json').indVars;

describe('IndVar Model', function () {
  var ids, indVar; 
  beforeEach(function(){
    ids = Object.keys(example);
    indVar = new IndVar(example[ids[0]]);
  });
  it('should set the id from the example indVar', function () {
    expect(indVar._id.toString()).to.eql(example[ids[0]]._id);
  });

  it('should be setting all the right keys', function () {
    var expectedKeys = ["name","numTrials","options","randomized", "reminders", "actionsPerTrial"];
    var actualKeys = Object.keys(indVar._doc);
    _.each(expectedKeys, function(key) {
      expect(actualKeys).to.contain(key);
      expect(indVar[key]).to.not.eql(undefined);
    });
  });
});
