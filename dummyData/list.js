module.exports = {
  name : 'paper chaser list',
  hypothesis : 'something',
  kind : 'ad_hoc',
  dependentVars : [{
    name : 'distance',
    active: false,
    measures : [
      {
      kind  : 'list',
      scale : null,
      list  : ['somewhere','overthere','idontcare'],
      unit  : null,
      samples : [{
        value: 'somewhere',
        // time: using defualt,
        independentVarStates : [{
          name : 'weight',
          value : '1g',
          }]
        },
        { value: 'overthere',
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
      reminders : [{
        freq :'everyday',
        reminder: 'do something here',
      }],
    },
  ]
};
