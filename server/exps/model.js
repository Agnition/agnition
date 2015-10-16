'use strict';
var mongoose = require('mongoose');

// declare schema
var expSchema = new mongoose.Schema({
  name : { type: String, required: true },
  hypothesis : { type: String, required: true },
  kind : {
    type: String,
    required : true, 
    validate : { 
      validator: expKindValidator,
      message: 'Invalid experiment kind'
    } 
  },
  dependentVar: {
    name : { type: String, required: true },
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

function expKindValidator (val) {
  return val === 'continious' ||  val === 'planned' || val === 'ad_hoc'; 
}

function mesKindValidator (val) {
  return val === 'qualitative' ||  val === 'list' || val === 'numeric'; 
}

function mesScaleValidator (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return ((this.kind !== 'qualitative' && val === null) || (this.kind === 'qualitative' &&  val instanceof Array));
}

function mesListValidator (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return ((this.kind !== 'list' && val === null) || (this.kind === 'list' &&  val instanceof Array));
}


// export model
module.exports = mongoose.model('Exp', expSchema);
