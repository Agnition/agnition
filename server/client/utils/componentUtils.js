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
    var indVarValue = _.first(_.pluck(_.filter(sample.indVars, function(indVar) {
        //return indVar._id === this.props.indVarId; // TODO: use when id is consistent
        return indVar.name === ownProps.name; // until db is consistent
      }), 'value'))
    return {
      indVarValue: indVarValue,
      measureValue: sample.value
    };
  });
  return {
    measureKind: measureKind,
    indVarName: indVarName,
    samples: samples
  };
};


module.exports.mapIdsToObjs = mapIdsToObjs;
module.exports.divCollection = divCollection;
module.exports.getSamplesForMeasure = getSamplesForMeasure;

