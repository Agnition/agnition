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

module.exports.resetNewExperiment = function () {
  return {
    type: 'RESET_NEW_EXPERIMENT'
  };
}
