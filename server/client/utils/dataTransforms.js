var _ = require('lodash');

module.exports.getValidSamplesSubmitted = function(expId, state) {
  var exp = state.Experiments.get(expId).toJS();
  var depVarId = exp.depVars[0];
  var measureId = state.DepVars.get(depVarId).get('measures').get(0);
  var sampleIds = state.Measures.get(measureId).get('samples').toJS();
  return _.filter(sampleIds, function(sampleId) {
    return state.Samples.getIn([sampleId, 'valid']) === true;
  }).length;
};

module.exports.getSamplesNeeded = function(expId, state) {
  var exp = state.Experiments.get(expId).toJS();
  var indVarId = exp.indVars[0];
  var trialsEach = state.IndVars.get(indVarId).get('numTrials');
  var optionsLength = state.IndVars.get(indVarId).get('options').toJS().length;
  return trialsEach * optionsLength;
};
