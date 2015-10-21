var React = require('react');
var mocha = require('mocha');
var expect = require('chai').expect;
var TestUtils = require('react-addons-test-utils');
var makeDom = require('./index.js');
var Hypothesis = require('../../server/client/containers/NewExperiment/Hypothesis.js');
var sinon = require('sinon');
var dom = makeDom();
var Immutable = require('immutable');
var createStore = require('redux').createStore;

describe('New Experiment Overview Test', function () {

  function createMockStore(state) {
    return {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => {
        return {...state};
      }
    };
  }
  
  var mockStore = {};
  mockStore.NewExperiment = Immutable.Map({
    hypothesis: 'Route A to work is fastest',
    cause: 'picking a better route',
    effect: 'getting to work quickly'
  });

  it('Hypothesis should have hypothesis, cause, and effect props', function () {
    var hypothesis = TestUtils.renderIntoDocument(<Hypothesis store={createMockStore(mockStore)} />, 'root');
    expect(hypothesis.props.store.getState().NewExperiment.get('hypothesis')).to.eql('Route A to work is fastest');
    expect(hypothesis.props.store.getState().NewExperiment.get('cause')).to.eql('picking a better route');
    expect(hypothesis.props.store.getState().NewExperiment.get('effect')).to.eql('getting to work quickly');
  });
});
