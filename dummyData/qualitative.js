module.exports = {
  name : 'paper chaser scale',
  hypothesis : 'something',
  kind : 'ad_hoc',
  dependentVars : [{
    name : 'distance',
    measures : [
      {
      kind  : 'qualitative',
      scale : [1,3,4,6],
      list  : null,
      unit  : null,
      samples : [{
        value: 1,
        // time: using defualt,
        independentVarStates : [{
          name : 'weight',
          value : '1g',
          }]
        },
        { value: 3,
        // time: using defualt,
        independentVarStates : [{
          name : 'weight',
          value : '2g',
          }]
        }
      ]
    }]
  }],
  independentVars : [{
      name: 'Weight',
      options : ['1g','2g'],
      numTrials : 1,
      actionsPerTrial : 1,
      randomized : true,
      reminder : [{
        freq :'everyday2',
        reminder: 'do something here2',
      }],
    },
  ]
};
