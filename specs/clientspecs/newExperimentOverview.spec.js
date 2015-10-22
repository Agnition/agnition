var React = require('react');
var ReactDOM = require('react-dom');
var mocha = require('mocha');
var expect = require('chai').expect;
var TestUtils = require('react-addons-test-utils');
var makeDom = require('./index.js');
var NewExperiment = require('../../server/client/screens/NewExperiment.js');
var sinon = require('sinon');
var dom = makeDom();
var Immutable = require('immutable');
var createStore = require('redux').createStore;
var Provider = require('react-redux').Provider;

describe('New Experiment Overview Test', function () {

  var hypothesis;

  beforeEach(function () {
    function createMockStore(state) {
      return {
        subscribe: () => {},
        dispatch: () => {},
        getState: () => {
          return {...state};
        }
      };
    }

    var mockState = {}
      mockState.NewExperiment = Immutable.Map({
      hypothesis: 'Route A to work is fastest',
      cause: 'picking a better route',
      effect: 'getting to work quickly'
      });

      hypothesis = TestUtils.renderIntoDocument(
        <Provider store={createMockStore(mockState)}>
        <NewExperiment />
        </Provider>, 'root');
  });


  it('should have hypothesis, cause, and effect props', function () {
    var div = TestUtils.scryRenderedDOMComponentsWithTag(hypothesis,'div');
    expect(ReactDOM.findDOMNode(div[0]).textContent).to.contain('Route A to work is fastest');
    expect(ReactDOM.findDOMNode(div[0]).textContent).to.contain('picking a better route');
    expect(ReactDOM.findDOMNode(div[0]).textContent).to.contain('getting to work quickly');
  });
});
