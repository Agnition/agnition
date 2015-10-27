var expect = require('chai').expect;
var _ = require('underscore');

var Exp = require('../../../../server/exps/models/Exp');
var example = require('../../../../dummyData/normalizedDummyData.json').experiments;

describe('Experiment Model', function () {
  var ids, exp; 
  beforeEach(function(){
    ids = Object.keys(example);
    exp = new Exp(example[ids[0]]);
  });
  it('should set the id from the example exp', function () {
    expect(exp._id.toString()).to.eql(example[ids[0]]._id);
  });

  it('should be setting all the right keys', function () {
    var expectedKeys = ["name","hypothesis","kind","indVars","depVars"];
    var actualKeys = Object.keys(exp._doc);
    _.each(expectedKeys, function(key) {
      expect(actualKeys).to.contain(key);
      expect(exp[key]).to.not.eql(undefined);
    });
  });
});
