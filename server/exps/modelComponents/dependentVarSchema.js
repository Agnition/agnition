'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var measureSchema = require('./measureSchema');

//dependentvar
var dependentVarSchema = new Schema ({
  name : {type: String, required: true },
  measures : [measureSchema]
});

module.exports = dependentVarSchema;