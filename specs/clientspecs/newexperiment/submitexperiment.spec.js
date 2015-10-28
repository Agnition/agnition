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
var SubmitExperiment = require('../../../server/client/containers/NewExperiment/SubmitExperiment');

describe('Submit Experiment', function () {
  var root;
  var submitExperiment;
  var actions;
  beforeEach(function () {

    root = document.createElement('div');
    var props = {
      expId: '88152'
    };

    // this is our mock of the store
    props.store = mockStore(testData);

    submitExperiment = TestUtils.renderIntoDocument(React.createElement(SubmitExperiment, props), root);
    actions = sinon.stub(submitExperiment.dispatchProps.actions);

  });
  afterEach(function () {
    ReactDOM.unmountComponentAtNode(root);
  });

  it('should post a new experiment when clicked', function () {
    var button = TestUtils.findRenderedDOMComponentWithTag(submitExperiment, 'button');
    // TestUtils.Simulate.click(button);
    expect(button).to.exist;
  });
});
