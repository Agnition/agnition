module.exports.setExperiments = function(exps) {
  return {
    type: 'SET_EXPERIMENTS',
    experiments: exps
  };
};

module.exports.createExperiment = function (expId) {
  return {
    type: 'CREATE_EXPERIMENT',
    expId: expId
  };
};

module.exports.setName = function (name, expId) {
  return {
    type: 'SET_NAME',
    name: name,
    expId: expId
  };
};

module.exports.setHypothesis = function (hypothesis, expId) {
  return {
    type: 'SET_HYPOTHESIS',
    hypothesis: hypothesis,
    expId: expId
  };
};

module.exports.setCause = function (cause, expId) {
  return {
    type: 'SET_CAUSE',
    cause: cause,
    expId: expId
  };
};

module.exports.setEffect = function (effect, expId) {
  return {
    type: 'SET_EFFECT',
    effect: effect,
    expId: expId
  };
};

module.exports.addDepVar = function (depVarKey, expId) {
  return {
    type: 'ADD_DEP_VAR',
    depVarKey: depVarKey,
    expId: expId
  };
};

module.exports.addIndVar = function (indVarKey, expId) {
  return {
    type: 'ADD_IND_VAR',
    indVarKey: indVarKey,
    expId: expId
  };
};
