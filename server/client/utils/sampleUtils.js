//Get all of the options for a single indVar experiment
var getOptions = function(measureData) {
  var options = [];
  for (var i = 0; i < measureData.length; i++) {
    if (options.indexOf(measureData[i].indVarValue) === -1) {
      options.push(measureData[i].indVarValue);
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
    var option = measureData[i].indVarValue;
    data[option].push(measureData[i].measureValue);
  }

  return data;
};

var genHistogram =function (bins, set, min, max) {
    //what we are returning
    var results = [];
    if(min === undefined){
      min = Math.min.apply(null, set);
    }

    if(max === undefined){
      max = Math.max.apply(null, set)+1;
    } else {
      //for max bin width
      max = max + 1;
    }

    var maxFreq = 0;

    var binWidth = (max-min)/bins;
    var freq = Array(bins).fill(0);


    for(var i = 0; i < set.length; i++) {
      var index = Math.floor((set[i] - min) / binWidth);
      freq[index]+=1;
    }

    for(i = 0; i < freq.length; i++) {
      maxFreq = Math.max(freq[i], maxFreq);
      results.push({x: (min+binWidth*i), y:freq[i] });
      results.push({x: (min+binWidth*(i+1)), y:freq[i] });
    }


    return {
      coordinates : results,
      min : min,
      max : max,
      maxFreq : maxFreq
    };
};

module.exports = {
  genHistogram: genHistogram,
  getOptions: getOptions,
  getValues: getValues
};
