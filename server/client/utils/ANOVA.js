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

var getOptions = function(measureData) {
  var options = [];
  for (var i = 0; i < measureData.length; i++) {
    if (options.indexOf(measureData[i].indVars.value) === -1) {
      options.push(measureData[i].indVars.value);
    }
  }
  return options;
};

var getValues = function(measureData) {
  var options = getOptions(measureData);
  var data = {};
  for (var i = 0; i < options.length; i++) {
    data[options[i]] = [];
  }

  for (var i = 0; i < measureData.length; i++) {
    var option = measureData[i].indVars.value;
    data[option].push(measureData[i].value);
  }

  return data;
};

module.exports = {
  getOptionDegreesOfFreedom: getOptionDegreesOfFreedom,
  getSampleDegreesOfFreedom: getSampleDegreesOfFreedom,
  getCriticalValue: getCriticalValue,
  getMean: getMean,
  sumOfSquaresBetweenGroups: sumOfSquaresBetweenGroups,
  sumOfSquaresWithinGroups: sumOfSquaresWithinGroups,
  totalSumOfSquares: totalSumOfSquares,
  neglectNullHyposthesis: neglectNullHyposthesis,
  getOptions: getOptions,
  getValues: getValues
};
