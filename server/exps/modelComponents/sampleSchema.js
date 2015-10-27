'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//sample
var sampleSchema = new Schema({
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  // occurence : Number,
  time: { type: Date, default: Date.now, required: true },
  independentVarStates : [{}]
});

module.exports = sampleSchema;
