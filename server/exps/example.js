var example = {
  name : 'Paper chaser',
  hypothesis : '5g is the best weight for planes',
  kind : 'ad_hoc',
  dependentVar: {
    name : 'Flight length',
    measures : [{
      name : 'Distance',
      kind : 'numeric',
      scale : null,
      list : null,
      samples : [{
        value: 3.2
      },
      {
        value: 2.5
      }],
      request : {
        freq : null, 
        question : 'how far did it fly?'
      }
    }]
  }, 
  independentVars : [{
    name: 'Weight',
    actionStart : null,
    actionWarning : null, //should likely be some datetime thing....
    consecutiveActions : 1,
    options : ['3.4','6.0'],
    remind : {
      freq : null, // whatever datetime thing we decide on
      reminder: 'Put this amount of weight in your plane'
    }
  }]
};

module.exports = example;