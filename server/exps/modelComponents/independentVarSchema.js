'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var remindSchema = require('./remindSchema');

// independentvar
var independentVarSchema = new Schema({
    name: { type: String, required: true },
    options : [String],
    numTrials : Number,
    actionsPerTrial : { type: Number, required: true, default: 1 },
    randomized : true,
    remind : remindSchema
});

module.exports = independentVarSchema;


 //TODO: decide on whether or not these matter...
 // actionStart : String,
 // actionWarning : String, //should likely be some datetime thing....