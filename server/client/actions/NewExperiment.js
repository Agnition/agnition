module.exports.setName = function (name) {
  return {
    type: 'SET_NAME',
    name: name
  };
};
 
module.exports.setHypothesis = function (hypothesis) {
  return {
    type: 'SET_HYPOTHESIS',
    hypothesis: hypothesis
  };
};

module.exports.setCause = function (cause) {
  return { 
    type: 'SET_CAUSE',
    cause: cause
  };
};

module.exports.setEffect = function (effect) {
  return {
    type: 'SET_EFFECT',
    effect: effect
  };
};
