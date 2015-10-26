'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var remindSchema = require('./remindSchema');

// indvar
var indVarSchema = new Schema({
    name: { type: String, required: true },
    options : [String],
    numTrials : Number,
    actionsPerTrial : { type: Number, required: true, default: 1 },
    randomized : Boolean,
    reminders : [remindSchema]
});

module.exports = indVarSchema;


 //TODO: decide on whether or not these matter...
 // actionStart : String,
 // actionWarning : String, //should likely be some datetime thing....

