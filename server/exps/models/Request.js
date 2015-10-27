var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
var freqValidator = require('./freqValidator');

//request
var requestSchema = new Schema({
  _id : {type: mongoose.Schema.ObjectId},
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

module.exports = mongoose.model('Request', requestSchema);
