var SumOfSquaresWithinGroups = function(samples) {
  var options = {}
  for (var i = 0; i < samples.length; i++) {
    samples[i]
  }
};

var getOptions = function(measureData) {
  var options = [];
  for (var i = 0; i < measureData.length; i++) {
    if(options.indexOf(measureData[i].indVars.value) === -1) {
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

var getMean = function(array) {
  return array.reduce(function(a, b) {
    return a + b;
  })/array.length;
};

