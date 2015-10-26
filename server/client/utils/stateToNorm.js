var _ = require('lodash');

module.exports = function(state) {
  var norm = {
    entities: {},
    result: {}
  };
  norm.entities.experiments = state.Experiments.toJS();
  norm.entities.depVars = state.DepVars.toJS();
  norm.entities.indVars = state.IndVars.toJS();
  norm.entities.measures = state.Measures.toJS();
  norm.entities.reminders = state.Reminders.toJS();
  norm.entities.samples = state.Samples.toJS();
  norm.result.exps = _.map(norm.entities.experiments, function(_, expKey) {
    return expKey;
  });
  return norm;
};
