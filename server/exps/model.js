'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//required modelCompents
var depVarSchema = require('./modelComponents/depVarSchema');
var indVarSchema = require('./modelComponents/indVarSchema');

//validator
var expKindValidator = function (val) {
  return val === 'continuous' || val === 'ad_hoc';
};

//exp
var expSchema = new Schema ({
  name : { type: String, required: true },
  hypothesis : { type: String },
  active: Boolean,
  kind : {
    type: String,
    required : true,
    validate : {
      validator: expKindValidator,
    }
  },
  depVars : [depVarSchema],
  indVars : [indVarSchema]
});


// export model
module.exports = mongoose.model('Exp', expSchema);
