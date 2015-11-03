var expect = require('chai').expect;
var sampleUtils = require('../../server/client/utils/sampleUtils');

describe('Sample utilities', function () {
  var samples = [{
    measureValue: 4,
    indVarValue: '1g'
  }, {
    measureValue: 5,
    indVarValue: '1g'
  }, {
    measureValue: 6,
    indVarValue: '2g'
  }, {
    measureValue: 7,
    indVarValue: '2g'
  }];

  it('should get the options in a set of samples', function () {
    expect(sampleUtils.getOptions(samples)).to.eql(['1g','2g']);
  });

  it('should list the values for each option in a set of samples', function () {
    expect(sampleUtils.getValues(samples)).to.eql({'1g':[4,5],'2g':[6,7]});
  });

});
