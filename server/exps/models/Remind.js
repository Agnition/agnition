var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
var freqValidator = require('./freqValidator');

//remind
var remindSchema = new Schema({
  _id : {type: mongoose.Schema.ObjectId},
  freq : {
    type: String, 
    validate : {
      validator : freqValidator
    }
  },
  reminder: String 
});

module.exports = mongoose.model('Remind', remindSchema);
