var Normalize = require('normalizr');
var Schema = Normalize.Schema;
var arrayOf = Normalize.arrayOf;

var experiment     = new Schema('experiments', {idAttribute: '_id'});
var depVar   = new Schema('depVars', {idAttribute: '_id'});
var indVar = new Schema('indVars', {idAttribute: '_id'});
var measure        = new Schema('measures', {idAttribute: '_id'});
var sample         = new Schema('samples', {idAttribute: '_id'});
var reminder       = new Schema('reminders', {idAttribute: '_id'});
var request        = new Schema('requests', {idAttribute: '_id'});

experiment.define({
  indVars : arrayOf(indVar),
  depVars : arrayOf(depVar)
});
depVar.define({
  measures : arrayOf(measure),
  requests : arrayOf(request)
});
indVar.define({
  reminders : arrayOf(reminder)
});
measure.define({
  samples : arrayOf(sample)
});

module.exports = {
  exps: arrayOf(experiment)
};
