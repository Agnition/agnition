var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
// var measureSchema = require('./measureSchema');

var depVarSchema = new Schema ({
  _id : {type: mongoose.Schema.ObjectId},
  name : {type: String, required: true },
  measures : [{ type: mongoose.Schema.ObjectId, ref: 'Measure' }] //[measureSchema]
});

module.exports = mongoose.model('DepVar', depVarSchema);
