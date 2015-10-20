var Exp = require('./model');
var User = require('../users/model');
var mongoose = require('mongoose');
var config = require('../config');
mongoose.connect(config.dbPath);

new User({username: 'hdh3000'}).save();
new User({username: 'mdboop'}).save();
new User({username: 'stevenlundy'}).save();
new User({username: 'marcusbuffett'}).save();

var addExp = function(exp, user) {
  exp = new Exp(exp);
  User.findOne({username : user}, function(err, nothing) {
      exp.save(function(err, exp) {
        if(err) { 
          console.error(err); 
          return;
        }
        User.update({username : user}, {
          $push: {exps: exp._id}
        }, function(err, mongoRes) {
          if(err) { 
            console.error(err); 
            return;
          }
          console.log(exp);
        });
      });
    });
  };


var exp1 = {
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

var exp2 = {
  name : 'paper chaser list',
  hypothesis : 'something',
  kind : 'ad_hoc',
  dependentVars : [{
    name : 'distance',
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
      reminder : [{
        freq :'everyday',
        reminder: 'do something here',
      }],
    },
  ] 
};

var exp3 = {
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


addExp(exp1,'hdh3000');
addExp(exp2,'hdh3000');
addExp(exp3,'hdh3000');