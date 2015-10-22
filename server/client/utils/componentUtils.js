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



module.exports.mapIdsToObjs = mapIdsToObjs;
module.exports.divCollection = divCollection;

