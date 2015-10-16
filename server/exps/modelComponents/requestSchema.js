'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var freqValidator = require('./freqValidator');

//request
var requestSchema = new Schema({
  freq : {
    type: String, 
    validate : {
      validator : freqValidator
    }
  },
  question : { 
    type: String, 
    required: true 
  }
});

module.exports = requestSchema;
