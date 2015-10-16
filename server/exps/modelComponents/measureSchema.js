'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var sampleSchema = require('./sampleSchema');
var requestSchema = require('./requestSchema');

//validator functions
var mesKindValidator = function (val) {
  return val === 'qualitative' ||  val === 'list' || val === 'numeric'; 
};

var mesScaleValidator = function (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return ((this.kind !== 'qualitative' && val === null) || (this.kind === 'qualitative' &&  val instanceof Array));
};

var mesListValidator = function (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return ((this.kind !== 'list' && val === null) || (this.kind === 'list' &&  val instanceof Array));
};

var mesUnitValidator = function (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return ((this.kind !== 'numeric' && val === null) || (this.kind === 'numeric' &&  typeof val === 'string'));
};


//mesuare schema
var measureSchema = new Schema({
  kind : { 
    type: String, 
    required: true,
    validate: {
      validator : mesKindValidator
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
  unit : {
    type: String,
    validate : { 
     validator: mesUnitValidator 
    }
  },
  samples : [sampleSchema],
  requests : [requestSchema]
});

module.exports = measureSchema;