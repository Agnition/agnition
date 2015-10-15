'use strict';
var mongoose = require('mongoose');

// declare schema
var expSchema = new mongoose.Schema({
  hypothesis : { type: String, required: true },
  dependentVariable: {
    name : { type: String, required: true },
    kind : {
      type: String,
      required : true, 
      validate : { 
        validator: depKindValidator 
      } 
    },
    measures : [{
      name : { type: String, required: true },
      kind : {
        type: String,
        required: true,
        validate : { 
         validator: mesKindValidator 
        }
      },
      scale : {
        type: Array,
        validate : { 
         validator: mesScaleValidator 
        }
      },
      list : {
        type: Array,
        validate : { 
         validator: mesListValidator 
        }
      },
      samples : [{
        value: { type: mongoose.Schema.Types.Mixed, required: true },
        time: { type: Date, default: Date.now, required: true }
      }],
      request : {
        freq : String, 
        question : { 
          type: String, 
          required: true 
        }
      }
    }]
  }, 
  independentVars : [{
    name: { type: String, required: true },
    actionStart : String,
    actionWarning : String, //should likely be some datetime thing....
    consecutiveActions : { type: Number, required: true, default: 1 },
    options : [String],
    remind : {
      freq : String, // whatever datetime thing we decide on
      reminder: String 
    }
  }]
});

var depKindValidator = function (val) {
  return val === 'continious' ||  val === 'planned' || val === 'ad_hoc'; 
};

var mesKindValidator = function (val) {
  return val === 'qualitative' ||  val === 'list' || val === 'numeric'; 
};

var mesScaleValidator = function (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return (this.type === 'qualitative' && typeof val === 'array');
};

var mesListValidator = function (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return (this.type === 'list' && typeof val === 'array');
};


// export model
module.exports = mongoose.model('Exp', expSchema);