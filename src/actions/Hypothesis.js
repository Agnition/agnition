module.exports.setHypothesis = function (hypothesis) {
  return {
    type: 'SET_HYPOTHESIS',
    hypothesis: hypothesis
  };
};

module.exports.setInVar = function (inVar) {
  return { 
    type: 'SET_CAUSE',
    inVar: inVar
  };
};

module.exports.setDepVar = function (depVar) {
  return {
    type: 'SET_EFFECT',
    depVar: depVar
  };
};
