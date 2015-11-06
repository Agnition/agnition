var mocha = require('mocha');
var expect = require('chai').expect;

var Immutable = require('immutable');

var NewExperiment = require('../../../server/client/reducers/NewExperiment');

describe('New Experiment Reducer', function(){

  it('should not count above 5', function () {
    var action = {
      type: "GO_TO_NEXT_QUESTION",
    };
    var state = new Immutable.Map({
      question: 5
    });
    state = NewExperiment(state, action);
    expect(state.get('question')).to.eql(5);
  });

    it('should count up one', function () {
    var action = {
      type: 'GO_TO_NEXT_QUESTION'
    };
    var state = new Immutable.Map({
      question: 0
    });
    state = NewExperiment(state, action);
    expect(state.get('question')).to.eql(1);
  });

  it('should count down one', function () {
    var action = {
      type: 'GO_TO_PREV_QUESTION'
    };
    var state = new Immutable.Map({
      question: 4
    });
    state = NewExperiment(state, action);
    expect(state.get('question')).to.eql(3);
  });

  it('should not count into negative numbers', function () {
    var action = {
      type: 'GO_TO_PREV_QUESTION'
    };
    var state = new Immutable.Map({
      question: 0
    });
    state = NewExperiment(state, action);
    expect(state.get('question')).to.eql(0);
  });
});
