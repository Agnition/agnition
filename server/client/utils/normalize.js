var Normalize = require('normalizr');
var Schema = Normalize.Schema;
var arrayOf = Normalize.arrayOf;
var normalize = Normalize.normalize;

var experiment     = new Schema('experiments', {idAttribute: '_id'});
var dependentVar   = new Schema('dependentVars', {idAttribute: '_id'});
var independentVar = new Schema('independentVars', {idAttribute: '_id'});
var measure        = new Schema('measures', {idAttribute: '_id'});
var sample         = new Schema('samples', {idAttribute: '_id'});
var reminder       = new Schema('reminders', {idAttribute: '_id'});
var request        = new Schema('requests', {idAttribute: '_id'});

experiment.define({
  independentVars : arrayOf(independentVar),
  dependentVars : arrayOf(dependentVar)
});
dependentVar.define({
  measures : arrayOf(measure),
  requests : arrayOf(request)
});
independentVar.define({
  reminder : arrayOf(reminder)
});
measure.define({
  samples : arrayOf(sample)
})

module.exports = function(data) {
  return normalize(data, {
    exps: arrayOf(experiment)
  });
}
