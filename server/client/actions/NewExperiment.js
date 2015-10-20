var INCREMENT_QUESTION_INDEX = 'INCREMENT_QUESTION_INDEX';
var DECREMENT_QUESTION_INDEX = 'DECREMENT_QUESTION_INDEX';

module.exports.setName = function (name) {
  return {
    type: 'SET_NAME',
    name: name
  };
};

module.exports.goToPrevQuestion = function (questionIndex) {
  return {
    type: 'GO_TO_PREV_QUESTION',
    questionIndex: questionIndex
  };
}

module.exports.goToNextQuestion = function (questionIndex) {
  return {
    type: 'GO_TO_NEXT_QUESTION',
    questionIndex: questionIndex
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