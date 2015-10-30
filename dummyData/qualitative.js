module.exports = {
  name : 'paper chaser scale',
  hypothesis : 'something',
  kind : 'ad_hoc',
  depVars : [{
    name : 'distance',
    active: true,
    measures : [
      {
      kind  : 'qualitative',
      list  : null,
      unit  : null,
      samples : [{
        value: 1,
        // time: using defualt,
        indVarStates : [{
          name : 'weight',
          value : '1g',
          }]
        },
        { value: 3,
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
      randomized : false,
      reminders : [{
        freq :'everyday2',
        reminder: 'do something here2',
      }],
    },
  ]
};
