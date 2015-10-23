var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');
var Hypothesis = require('../../../server/client/containers/NewExperiment/Hypothesis');

//Mock Dom Setup
require('../index.js')();


describe('New Experiment: Hypothesis Input Component', function () {
  var hypothesis;
  beforeEach(function () {
    var props = {
      expId: 'a'
    };

    //this is our mock of the DepVar state property
    var obj = {
      Experiments : {
        a: {
          hypothesis: 'this test will pass',
          cause: 'correct code',
          effect: 'a nice green check mark'
        }
      }
    };

    props.store = mockStore(obj);

    hypothesis = TestUtils.renderIntoDocument(React.createElement(Hypothesis, props), 'root');
  });

  it('should have three inputs', function () {
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(hypothesis,'input');
    expect(inputs[0].value).to.contain('this test will pass');
    expect(inputs[1].value).to.contain('correct code');
    expect(inputs[2].value).to.contain('a nice green check mark');

  });
});
