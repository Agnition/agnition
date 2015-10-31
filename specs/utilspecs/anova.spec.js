var expect = require('chai').expect;
var ANOVA = require('../../server/client/utils/ANOVA');

describe('ANOVA utility functions', function () {
  var data = {
    '1g': [2, 4, 5, 3, 6],
    '2g': [4, 5, 6, 4, 6]
  };

  it('should getOptionDegreesOfFreedom', function () {
    expect(ANOVA.getOptionDegreesOfFreedom(data)).to.eql(1);
  });

  it('should getSamplesDegreesOfFreedom', function () {
    expect(ANOVA.getSampleDegreesOfFreedom(data)).to.eql(8);
  });

  it('should getCriticalValues', function () {
    expect(ANOVA.getCriticalValue(1, 1)).to.eql(647.793);
    expect(ANOVA.getCriticalValue(8, 2)).to.eql(6.059);
  });

  it('should calculate the mean', function () {
    expect(ANOVA.getMean([1, 2, 3, 4, 5])).to.eql(3);
    expect(ANOVA.getMean([1, 1, 3, 3])).to.eql(2);
  });

  it('should find the sum of squares of deviation from the mean', function () {
    expect(ANOVA.getSumOfSquaresDeviation([2, 4, 5, 3, 6])).to.eql(10);
  });

  it('should find the variance', function () {
    expect(ANOVA.getVariance([2, 4, 5, 3, 6])).to.eql(2);
  });

  it('should find the standard deviation', function () {
    expect(ANOVA.getStandardDeviation([2, 4, 5, 3, 6])).to.eql(Math.sqrt(2));
  });

  it('should find sumOfSquaresWithinGroups', function () {
    expect(ANOVA.sumOfSquaresWithinGroups({'1g': [2, 4, 5, 3, 6]})).to.eql(10);
    expect(ANOVA.sumOfSquaresWithinGroups({'2g': [4, 5, 6, 4, 6]})).to.eql(4);

    expect(ANOVA.sumOfSquaresWithinGroups(data)).to.eql(14);
  });

  it('should find sumOfSquaresBetweenGroups', function () {
    expect(ANOVA.sumOfSquaresBetweenGroups(data)).to.eql(2.5); // (5*(5 - 4.5)^2 + 5*(4 - 4.5)^2)
  });

  it('should find totalSumOfSquares', function () {
    expect(ANOVA.totalSumOfSquares(data)).to.eql(16.5);
  });

  it('should correctly assess null hypothesis', function () {
    expect(ANOVA.neglectNullHyposthesis(data)).to.eql(false);
  });
});
