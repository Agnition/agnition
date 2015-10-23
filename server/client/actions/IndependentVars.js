module.exports.setIndVars = function(indVars) {
  return {
    type: 'SET_IND_VARS',
    indVars: indVars
  };
};
module.exports.setName = function (name, id) {
  return {
    type: 'SET_NAME',
    name : name,
    id: id
  };
};
module.exports.setActionsPerTrial = function (actionsPerTrial, id) {
  return {
    type: 'SET_ACTIONS_PER_TRIAL',
    actionsPerTrial : actionsPerTrial,
    id: id
  };
};
module.exports.setNumTrials = function (numTrials, id) {
  return {
    type: 'SET_NUM_TRIALS',
    numTrials : numTrials,
    id: id
  };
};
module.exports.setRandomized = function (randomized, id) {
  return {
    type: 'SET_RANDOMIZED',
    randomized : randomized,
    id: id
  };
};
module.exports.pushOption = function (option, id) {
  return {
    type: 'PUSH_OPTION',
    option : option,
    id: id
  };
};
