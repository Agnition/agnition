module.exports.setHypothesis = function (hypothesis) {
  return {
    type: 'SET_HYPOTHESIS',
    hypothesis: hypothesis
  };
};

module.exports.setCause = function (iv) {
  return { 
    type: 'SET_CAUSE',
    iv: iv
  };
};

module.exports.setEffect = function (dv) {
  return {
    type: 'SET_EFFECT',
    dv: dv
  };
};
