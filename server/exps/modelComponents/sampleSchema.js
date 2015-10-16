'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//sample
var sampleSchema = new Schema({
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  time: { type: Date, default: Date.now, required: true }
});

module.exports = sampleSchema;