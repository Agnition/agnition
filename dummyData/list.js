module.exports = {
  name : 'paper chaser list',
  hypothesis : 'something',
  kind : 'ad_hoc',
  active: true,
  depVars : [{
    name : 'distance',
    active: false,
    measures : [
      {
      kind  : 'list',
      list  : ['somewhere','overthere','idontcare'],
      unit  : null,
      scaleDescriptionMin: null,
      scaleDescriptionMiddle: null,
      scaleDescriptionMax: null,
      samples : [{
        value: 'somewhere',
        // time: using defualt,
        indVarStates : [{
          name : 'weight',
          value : '1g',
          }]
        },
        { value: 'overthere',
        // time: using defualt,
        indVarStates : [{
          name : 'weight',
          value : '2g',
          }]
        }
      ]
    }]
  }],
  indVars : [{
      name: 'weight',
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
