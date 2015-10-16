'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//request
var requestSchema = new Schema({
  freq : String, 
  question : { 
    type: String, 
    required: true 
  }
});

module.exports = requestSchema;