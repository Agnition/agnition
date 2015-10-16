module.exports = {
  name : 'paper chaser',
  hypothesis : 'something',
  kind : 'ad_hoc',
  dependentVars : [{
    name : 'distance',
    measures : [
      {
      kind  : 'numeric',
      scale : null,
      list  : null,
      unit  : 'feet', 
      samples : [{
        value: 1,
        // time: using defualt,
        independentVars : [{
          name : 'weight',
          optionIndex : 0,
          }]
        },
        { value: 2,
        // time: using defualt,
        independentVars : [{
          name : 'weight',
          optionIndex : 1,
          }]
        }
      ]
    }]
  }],
  independentVars : [{
      name: 'Weight',
      options : ['1g','2g'],
      numTrials : 1,
      // actionsPerTrial : { type: Number, required: true, default: 1 },
      randomized : true,
      reminder : [{
        freq : null,
        reminder: null,
      }],
    },
  ] 
};