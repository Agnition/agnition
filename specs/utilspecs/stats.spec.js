var expect = require('chai').expect;
var statsUtil = require('../../server/client/utils/stats');

describe('stats utility functions', function () {

  it('should calculate the mean', function () {
    expect(statsUtil.getMean([1, 2, 3, 4, 5])).to.eql(3);
    expect(statsUtil.getMean([1, 1, 3, 3])).to.eql(2);
  });

  it('should find the sum of squares of deviation from the mean', function () {
    expect(statsUtil.getSumOfSquaresDeviation([2, 4, 5, 3, 6])).to.eql(10);
  });

  it('should find the variance', function () {
    expect(statsUtil.getVariance([2, 4, 5, 3, 6])).to.eql(2);
  });

  it('should find the standard deviation', function () {
    expect(statsUtil.getStandardDeviation([2, 4, 5, 3, 6])).to.eql(Math.sqrt(2));
  });

});
