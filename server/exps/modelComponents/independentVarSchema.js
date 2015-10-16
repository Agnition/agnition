'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var remindSchema = require('./remindSchema');

//independentvar
var independentVarSchema = new Schema({
    name: { type: String, required: true },
    actionStart : String,
    actionWarning : String, //should likely be some datetime thing....
    consecutiveActions : { type: Number, required: true, default: 1 },
    options : [String],
    remind : remindSchema
});

module.exports = independentVarSchema;