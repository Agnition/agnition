var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
// var remindSchema = require('./remindSchema');

// indvar
var indVarSchema = new Schema({
  _id : {type: mongoose.Schema.ObjectId},
  name: { type: String, required: true },
  options : [String],
  numTrials : Number,
  actionsPerTrial : { type: Number, required: true, default: 1 },
  randomized : Boolean,
  reminders : [{ type: mongoose.Schema.ObjectId, ref: 'Remind' }] //[remindSchema]
});

module.exports = mongoose.model('IndVar', indVarSchema);


 //TODO: decide on whether or not these matter...
 // actionStart : String,
 // actionWarning : String, //should likely be some datetime thing....

