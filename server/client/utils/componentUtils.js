var React = require('react');
var _ = require('underscore');


//use this to convert and idmap into a set of jsobjects within map state to props
var mapIdsToObjs = function(idArray, stateProp){
  var items = [];
  _.each(idArray, function(id){
    items.push(stateProp.get(id).toJS());
  });
  return items;
};

//call this at createclass.render wrapped in an anonymus function
var divCollection = function(subElementobjects, subElementConstructor, propKey) {
    var divs = [];
    _.each(subElementobjects, function(obj){
      var props = {};
      props[propKey] = obj;
      divs.push(React.createElement(subElementConstructor, props));
    })
    return(
      <div>
        {divs}
      </div>
    )
};


var getSamplesForMeasure = function(state, measureId, indVarId) {
  var measureKind = state.Measures.getIn([measureId, 'kind']);
  var indVarName = state.IndVars.getIn([indVarId, 'name']);
  var sampleIds = state.Measures.getIn([measureId, 'samples']).toJS();
  var samples = _.map(sampleIds, function(sampleId) {
    var sample = state.Samples.get(sampleId).toJS();
    var indVarValue = _.first(_.pluck(_.filter(sample.indVarStates, function(indVar) {
        return indVar.indVar === indVarId; // TODO: use when id is consistent
        // return indVar.name === indVarName; // until db is consistent
      }), 'value'));
    return {
      indVarValue: indVarValue,
      measureValue: sample.value
    };
  });
  return {
    indVarName: indVarName,
    measureKind: measureKind,
    samples: samples
  };
};

var genHistogram =function (bins, set) {
    var min = Math.min.apply(null, set);
    var max = Math.max.apply(null, set)+1;
    
    var binWidth = (max-min)/bins;
    var freq = Array(bins).fill(0);
    
    var results = [];

    for(var i = 0; i < set.length; i++) {
        var index = Math.floor((set[i] - min) / binWidth);
        freq[index]+=1;
    }

    for(var i =0; i < freq.length; i++){
        results.push({x: (min+binWidth*i), y:freq[i] });
        results.push({x: (min+binWidth*(i+1)), y:freq[i] }) 
    }

    console.dir(results);
    return results;
};

var genSingleSeriesBarChartValues = function (indVarValues, samples) {
   if(indVarValues === undefined || samples === undefined) {
       console.log("bad arguments to genSingleSeriesBarChart");
       return;
   }

   var coordinates = []; //what we will return
   var averages = {}; // to hold intermediate values

   //get each series we are looking for
   _.each(indVarValues, function(value){
       averages[value] = {
           total: 0,
           count: 0,
           avg  : null,
       };
   });


   //collapse samples into averages object
   _.each(samples.samples,function(sample){
       averages[sample.indVarValue].total += sample.measureValue;
       averages[sample.indVarValue].count ++;
   });

   // transform the averages object into a set of coordinates
   coordinates = _.map(averages, function(result, key){
       result.avg = result.total / result.count;
       return {x: key, y: result.avg};
   });
   
   return coordinates;
};

module.exports.mapIdsToObjs = mapIdsToObjs;
module.exports.divCollection = divCollection;
module.exports.getSamplesForMeasure = getSamplesForMeasure;
module.exports.genHistogram = genHistogram;
module.exports.genSingleSeriesBarChartValues = genSingleSeriesBarChartValues;

