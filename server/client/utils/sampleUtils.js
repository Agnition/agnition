//Get all of the options for a single indVar experiment
var getOptions = function(measureData) {
  var options = [];
  for (var i = 0; i < measureData.length; i++) {
    if (options.indexOf(measureData[i].indVars[0].value) === -1) {
      options.push(measureData[i].indVars[0].value);
    }
  }
  return options;
};

//Get an object with all of the samples for each option
var getValues = function(measureData) {
  var options = getOptions(measureData);
  var data = {};
  for (var i = 0; i < options.length; i++) {
    data[options[i]] = [];
  }

  for (var i = 0; i < measureData.length; i++) {
    var option = measureData[i].indVars[0].value;
    data[option].push(measureData[i].value);
  }

  return data;
};

module.exports = {
  getOptions: getOptions,
  getValues: getValues
};
