var getMean = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  }) / array.length;
};

var getSumOfSquaresDeviation = function(array) {
  var mean = getMean(array);
  return array.reduce(function(sum, item) {
    return sum + Math.pow(mean - item, 2);
  }, 0);
};

var getVariance = function(array) {
  return getSumOfSquaresDeviation(array) / array.length;
};

var getStandardDeviation = function(array) {
  return Math.sqrt(getVariance(array));
};

module.exports = {
  getMean: getMean,
  getSumOfSquaresDeviation: getSumOfSquaresDeviation,
  getVariance: getVariance,
  getStandardDeviation: getStandardDeviation
};
