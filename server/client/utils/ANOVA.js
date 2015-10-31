var criticalValues = require('./ANOVACriticalValues');

var getOptionDegreesOfFreedom = function(data) {
  return Object.keys(data).length - 1;
};

var getSampleDegreesOfFreedom = function(data) {
  var numOfOptions = 0;
  var numOfSamples = 0;
  for(var option in data) {
    numOfOptions++;
    numOfSamples += data[option].length;
  }
  return numOfSamples - numOfOptions;
};

var getCriticalValue = function(sampleDegreesOfFreedom, optionDegreesOfFreedom) {
  return criticalValues[sampleDegreesOfFreedom-1][optionDegreesOfFreedom-1];
};

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

var sumOfSquaresWithinGroups = function(data) {
  var sumOfSquares = 0;
  for (var option in data) {
    var mean = getMean(data[option]);
    var sumOfGroup = 0;
    for (var i = 0; i < data[option].length; i++) {
      sumOfGroup += Math.pow(mean - data[option][i], 2);
    }
    sumOfSquares += sumOfGroup;
  }
  return sumOfSquares;
};

var totalSumOfSquares = function(data) {
  var fullData = [];
  for (var option in data) {
    fullData = fullData.concat(data[option]);
  }
  var mean = getMean(fullData);
  var sumOfSquares = 0;
  for (var i = 0; i < fullData.length; i++) {
    sumOfSquares += Math.pow(mean - fullData[i], 2);
  }
  return sumOfSquares;
};

var sumOfSquaresBetweenGroups = function(data) {
  var fullData = [];
  for (var option in data) {
    fullData = fullData.concat(data[option]);
  }
  var fullMean = getMean(fullData);
  var sumOfSquares = 0;
  for (var option in data) {
    var mean = getMean(data[option]);
    sumOfSquares += Math.pow(mean - fullMean, 2) * data[option].length;
  }
  return sumOfSquares;
};

var neglectNullHyposthesis = function(data) {
  var sampleDegreeOfFreedom = getSampleDegreesOfFreedom(data);
  var optionDegreeOfFreedom = getOptionDegreesOfFreedom(data);
  var fRatio = (sumOfSquaresBetweenGroups(data) / optionDegreeOfFreedom) /
               (sumOfSquaresWithinGroups(data) / sampleDegreeOfFreedom);
  return fRatio > getCriticalValue(sampleDegreeOfFreedom, optionDegreeOfFreedom);
};

module.exports = {
  getOptionDegreesOfFreedom: getOptionDegreesOfFreedom,
  getSampleDegreesOfFreedom: getSampleDegreesOfFreedom,
  getCriticalValue: getCriticalValue,
  getMean: getMean,
  getSumOfSquaresDeviation: getSumOfSquaresDeviation,
  getVariance: getVariance,
  getStandardDeviation: getStandardDeviation,
  sumOfSquaresBetweenGroups: sumOfSquaresBetweenGroups,
  sumOfSquaresWithinGroups: sumOfSquaresWithinGroups,
  totalSumOfSquares: totalSumOfSquares,
  neglectNullHyposthesis: neglectNullHyposthesis,
};
