module.exports.setExperiments = function(exps) {
  return {
    type: 'SET_EXPERIMENTS',
    experiments: exps
  };
};

module.exports.createExperiment = function (key) {
  return {
    type: 'CREATE_EXPERIMENT',
    key: key
  };
};

module.exports.setName = function (name, key) {
  return {
    type: 'SET_NAME',
    name: name,
    key: key
  };
};

module.exports.setHypothesis = function (hypothesis, key) {
  return {
    type: 'SET_HYPOTHESIS',
    hypothesis: hypothesis,
    key: key
  };
};

module.exports.setCause = function (cause, key) {
  return {
    type: 'SET_CAUSE',
    cause: cause,
    key: key
  };
};

module.exports.setEffect = function (effect, key) {
  return {
    type: 'SET_EFFECT',
    effect: effect,
    key: key
  };
};

module.exports.addDepVar = function (depVarKey, key) {
  return {
    type: 'ADD_DEP_VAR',
    depVarKey: depVarKey,
    key: key
  };
};

module.exports.addIndVar = function (indVarKey, key) {
  return {
    type: 'ADD_IND_VAR',
    indVarKey: indVarKey,
    key: key
  };
};
