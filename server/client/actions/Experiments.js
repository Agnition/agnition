var Immutable = require('Immutable');
module.exports.setExperiments = function(exps) {
  console.log('creating action to set state!')
  return {
    type: 'SET_EXPERIMENTS',
    experiments: exps
  }
}
