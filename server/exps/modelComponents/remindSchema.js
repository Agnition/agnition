'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//remind
var remindSchema = new Schema({
  freq : String, // whatever datetime thing we decide on
  reminder: String 
});

module.exports = remindSchema;