var Immutable = require('immutable');

module.exports.createExperiment = function () {
  return {
    type: 'CREATE_EXPERIMENT',
    newExperiment: Immutable.Map({})
  };
};

module.exports.viewExperiments = function () {
  return {
    type: 'VIEW_EXPERIMENTS'
  };
};
