var expect = require('chai').expect;
var sampleUtils = require('../../server/client/utils/sampleUtils');

describe('Sample utilities', function () {
  var samples = [{
    value: 4,
    indVars: [{
      value: '1g'
    }]
  }, {
    value: 5,
    indVars: [{
      value: '1g'
    }]
  }, {
    value: 6,
    indVars: [{
      value: '2g'
    }]
  }, {
    value: 7,
    indVars: [{
      value: '2g'
    }]
  }];

  it('should get the options in a set of samples', function () {
    expect(sampleUtils.getOptions(samples)).to.eql(['1g','2g']);
  });

  it('should list the values for each option in a set of samples', function () {
    expect(sampleUtils.getValues(samples)).to.eql({'1g':[4,5],'2g':[6,7]});
  });

});
