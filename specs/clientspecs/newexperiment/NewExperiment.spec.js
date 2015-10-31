var index = require('../index.js')();
var mocha = require('mocha');
var expect = require('chai').expect;

var testData = require('../../utilspecs/testStoreData');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');

var sinon = require('sinon');


// mock out the sub-component
var NewExperiment = mockRequire('../../../server/client/screens/NewExperiment', {
  '../containers/NewExperiment/Name' : utils.mockDivComponent('Name'),
  '../containers/NewExperiment/Hypothesis' : utils.mockDivComponent('Hypothesis'),
  '../containers/NewExperiment/DepVarWrapper' : utils.mockDivComponent('DepVarWrapper'),
  '../containers/NewExperiment/IndVarWrapper' : utils.mockDivComponent('IndVarWrapper'),
  '../containers/NewExperiment/SubmitExperiment' : utils.mockDivComponent('SubmitExperiment'),
  '../containers/NewExperiment/HypothesisCheck' : utils.mockDivComponent('HypothesisCheck'),
  '../containers/NewExperiment/components/ProgressWrapper'  : utils.mockDivComponent('NewExperimentProgress'),
}, {jsx:true});

describe('Submit Experiment', function () {
  var root;
  var newExperiment;
  var actions;
  beforeEach(function () {

    root = document.createElement('div');
    var props = {
      expId: '88152'
    };

    // this is our mock of the store
    props.store = mockStore({
      NewExperiment : 0
    });

    newExperiment = TestUtils.renderIntoDocument(React.createElement(NewExperiment, props), root);
    actions = sinon.stub(newExperiment.dispatchProps.actions);

  });
  afterEach(function () {
    ReactDOM.unmountComponentAtNode(root);
  });

  it('should hide back button', function () {
    var buttons = TestUtils.scryRenderedDOMComponentsWithTag(newExperiment, 'button');
    // TestUtils.Simulate.click(button);
    expect(buttons.length).to.equal(1);
  });
});
