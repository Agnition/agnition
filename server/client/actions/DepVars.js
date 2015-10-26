module.exports.setDepVars = function(depVars) {
  return {
    type: 'SET_DEP_VARS',
    depVars: depVars
  };
};

module.exports.createDepVar = function (depVarId) {
  return {
    type: 'CREATE_DEP_VAR',
    depVarId: depVarId
  };
};

module.exports.setDepVarName = function (name, depVarId) {
  return {
    type: 'SET_DEP_VAR_NAME',
    name: name,
    depVarId: depVarId
  };
};

module.exports.addMeasure = function (measureId, depVarId) {
  return {
    type: 'ADD_MEASURE',
    measureId: measureId,
    depVarId: depVarId
  };
};
