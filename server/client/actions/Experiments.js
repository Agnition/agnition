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

module.exports.deleteExperiment = function (expId) {
  return {
    type: 'DELETE_EXPERIMENT',
    expId: expId
  };
};

module.exports.setExperimentKind = function (kind, expId) {
  return {
    type: 'SET_EXPERIMENT_KIND',
    kind: kind,
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

module.exports.setActive = function (active, expId) {
  return {
    type: 'SET_ACTIVE',
    active: active,
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

module.exports.addDepVar = function (depVarId, expId) {
  return {
    type: 'ADD_DEP_VAR',
    depVarId: depVarId,
    expId: expId
  };
};

module.exports.addIndVar = function (indVarId, expId) {
  return {
    type: 'ADD_IND_VAR',
    indVarId: indVarId,
    expId: expId
  };
};
