module.exports.setName = function (name) {
  return {
    type: 'SET_NAME',
    name: name
  };
};

module.exports.goToPrevQuestion = function () {
  return {
    type: 'GO_TO_PREV_QUESTION'
  };
};

module.exports.goToNextQuestion = function () {
  return {
    type: 'GO_TO_NEXT_QUESTION'
  };
};

module.exports.setOverview = function (hypothesis, cause, effect) {
  return {
    type: 'SET_OVERVIEW',
    hypothesis: hypothesis,
    cause: cause,
    effect: effect
  };
};

module.exports.setMeasureKind = function (kind) {
  return {
    type: 'SET_DEPVAR_KIND',
    kind: kind
  };
};
