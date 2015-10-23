module.exports.setIndVars = function(indVars) {
  return {
    type: 'SET_IND_VARS',
    indVars: indVars
  };
};
module.exports.setName = function (name, indVarId) {
  return {
    type: 'SET_INDVAR_NAME',
    name : name,
    indVarId: indVarId
  };
};
module.exports.setActionsPerTrial = function (actionsPerTrial, indVarId) {
  return {
    type: 'SET_INDVAR_ACTIONS_PER_TRIAL',
    actionsPerTrial : actionsPerTrial,
    indVarId: indVarId
  };
};
module.exports.setNumTrials = function (numTrials, indVarId) {
  return {
    type: 'SET_INDVAR_NUM_TRIALS',
    numTrials : numTrials,
    indVarId: indVarId
  };
};
module.exports.setRandomized = function (randomized, indVarId) {
  return {
    type: 'SET_INDVAR_RANDOMIZED',
    randomized : randomized,
    indVarId: indVarId
  };
};
module.exports.pushOption = function (option, indVarId) {
  return {
    type: 'PUSH_INDVAR_OPTION',
    option : option,
    indVarId: indVarId
  };
};

module.exports.popOption = function (option, indVarId) {
  return {
    type: 'POP_INDVAR_OPTION',
    option : option,
    indVarId: indVarId
  };
};

