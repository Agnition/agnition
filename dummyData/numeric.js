module.exports = {
  // _id : 0,
  name : 'paper chaser',
  hypothesis : 'something',
  kind : 'ad_hoc',
  depVars : [{
    // _id : 1,
    name : 'distance',
    active: true,
    measures : [
      {
        // _id : 2,
        kind  : 'numeric',
        list  : null,
        unit  : 'feet',
        scaleDescriptionMin: null,
        scaleDescriptionMiddle: null,
        scaleDescriptionMax: null,
        samples : [{
          // _id : 3,
          value: 1,
          // time: using defualt,
          indVars : [{
            // _id : 4,
            name : 'weight',
            optionIndex : 0,
          }]
        },
        { value: 2,
          // time: using defualt,
          indVars : [{
            // _id : 5,
            name : 'weight',
            optionIndex : 1,
          }]
        }
        ]
      }]
  }],
  indVars : [{
    // _id : 6,
    name: 'weight',
    options : ['1g','2g'],
    numTrials : 3,
    // actionsPerTrial : { type: Number, required: true, default: 1 },
    randomized : true,
    reminders : [{
      freq : null,
      reminder: null,
    }],
  },
  ]
};
