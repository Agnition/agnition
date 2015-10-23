var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');
var Hypothesis = require('../../../server/client/containers/NewExperiment/HypothesisCheck');

//Mock Dom Setup
require('../index.js')();


describe('New Experiment: Hypothesis Input Component', function () {
  var hypothesisCheck;
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

    hypothesisCheck = TestUtils.renderIntoDocument(React.createElement(Hypothesis, props), 'root');
  });

  it('should render the hypothesis, cause and effect correctly', function () {
    var p = TestUtils.scryRenderedDOMComponentsWithTag(hypothesisCheck,'p');
    expect(p[2].textContent).to.contain('this test will pass');
    expect(p[3].textContent).to.contain('correct code');
    expect(p[3].textContent).to.contain('a nice green check mark');

  });
});