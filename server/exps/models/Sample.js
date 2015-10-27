var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

//sample
var sampleSchema = new Schema({
  _id : {type: mongoose.Schema.ObjectId},
  value: { type: mongoose.Schema.Types.Mixed, required: true },
  // occurence : Number,
  time: { type: Date, default: Date.now, required: true },
  indVarStates : [{
    name : { type: String, required: true },
    value : { type: mongoose.Schema.Types.Mixed, required: true },
  }]
});

module.exports = mongoose.model('Sample', sampleSchema);
