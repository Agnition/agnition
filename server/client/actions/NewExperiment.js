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

module.exports.resetQuestionIndex = function () {
  return {
    type: 'RESET_QUESTION_INDEX'
  };
};

module.exports.setValidity = function (valid) {
  return {
    type: 'SET_VALIDITY',
    valid: valid
  }
};
