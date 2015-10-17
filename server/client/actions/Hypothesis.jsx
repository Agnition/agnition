'use strict';

module.exports.setHypothesis = function (hypothesis) {
  return {
    type: 'SET_HYPOTHESIS',
    hypothesis: hypothesis
  };
};

module.export.setIV = function (iv) {
  return { 
    type: 'SET_IV',
    iv: iv
  };
};

module.export.setDV = function (dv) {
  return {
    type: 'SET_DV',
    dv: dv
  };
};