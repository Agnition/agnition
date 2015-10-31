var expect = require('chai').expect;
var ANOVA = require('../../server/client/utils/ANOVA');

describe('ANOVA utility functions', function () {
  var data = {
    '1g': [2, 4, 5, 3, 6],
    '2g': [4, 5, 6, 4, 6]
  };

  it('should getOptionDegreesOfFreedom', function () {
    expect(ANOVA._getOptionDegreesOfFreedom(data)).to.eql(1);
  });

  it('should getSamplesDegreesOfFreedom', function () {
    expect(ANOVA._getSampleDegreesOfFreedom(data)).to.eql(8);
  });

  it('should getCriticalValues', function () {
    expect(ANOVA._getCriticalValue(1, 1)).to.eql(647.793);
    expect(ANOVA._getCriticalValue(8, 2)).to.eql(6.059);
  });

  it('should find sumOfSquaresWithinGroups', function () {
    expect(ANOVA._sumOfSquaresWithinGroups({'1g': [2, 4, 5, 3, 6]})).to.eql(10);
    expect(ANOVA._sumOfSquaresWithinGroups({'2g': [4, 5, 6, 4, 6]})).to.eql(4);

    expect(ANOVA._sumOfSquaresWithinGroups(data)).to.eql(14);
  });

  it('should find sumOfSquaresBetweenGroups', function () {
    expect(ANOVA._sumOfSquaresBetweenGroups(data)).to.eql(2.5); // (5*(5 - 4.5)^2 + 5*(4 - 4.5)^2)
  });

  it('should find totalSumOfSquares', function () {
    expect(ANOVA._totalSumOfSquares(data)).to.eql(16.5);
  });

  it('should correctly assess null hypothesis', function () {
    expect(ANOVA.neglectNullHyposthesis(data)).to.eql(false);
  });
});
