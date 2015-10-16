'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var freqValidator = require('./freqValidator');

//remind
var remindSchema = new Schema({
  freq : {
    type: String, 
    validate : {
      validator : freqValidator
    }
  },
  reminder: String 
});

module.exports = remindSchema;
