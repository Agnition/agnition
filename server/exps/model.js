'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var dependentVarSchema = require('./modelComponents/dependentVarSchema');
var independentVarSchema = require('./modelComponents/independentVarSchema');

//validator
var expKindValidator = function (val) {
  return val === 'continious' ||  val === 'planned' || val === 'ad_hoc'; 
};

//exp
var expSchema = new Schema ({
  name : { type: String, required: true },
  hypothesis : { type: String },
  type : {
    type: String,
    required : true, 
    validate : { 
      validator: expKindValidator,
    }
  },
  dependentVars : [dependentVarSchema],
  independentVars : [independentVarSchema] 
});


// export model
module.exports = mongoose.model('Exp', expSchema);
