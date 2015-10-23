module.exports = {
  _id : 0,
  name : 'paper chaser',
  hypothesis : 'something',
  kind : 'ad_hoc',
  dependentVars : [{
    _id : 1,
    name : 'distance',
    active: true,
    measures : [
      {
        _id : 2,
        kind  : 'numeric',
        scale : null,
        list  : null,
        unit  : 'feet',
        samples : [{
          _id : 3,
          value: 1,
          // time: using defualt,
          independentVars : [{
            _id : 4,
            name : 'weight',
            optionIndex : 0,
          }]
        },
        { value: 2,
          // time: using defualt,
          independentVars : [{
            _id : 5,
            name : 'weight',
            optionIndex : 1,
          }]
        }
        ]
      }]
  }],
  independentVars : [{
    _id : 6,
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
