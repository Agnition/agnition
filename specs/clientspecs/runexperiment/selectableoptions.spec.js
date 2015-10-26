//boilerplate
var index = require('../index.js')();
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var _ = require('underscore');

//require specific components
var SelectableOptions = require('../../../server/client/containers/RunAdHocExperiment/SelectableOptions.js');

describe('SelectableOptions Container', function () {
  var selectableOptions;
  var actions;
  beforeEach(function () {
    var props = {};
    var obj = {
      IndVars : {
        a : {
          name: 'exp',
          options: ['1a','2a','3a','4a']
        },
      },
    };
    props.store = mockStore(obj);
    props.indVarId = 'a';
    selectableOptions = TestUtils.renderIntoDocument(React.createElement(SelectableOptions, props), 'root');
    actions = sinon.stub(selectableOptions.dispatchProps.actions);
  });

  it('should display the attributes correctly', function () {
    //this is effectivlety a test of get options.
    var labels = TestUtils.scryRenderedDOMComponentsWithTag(selectableOptions, 'label');
    var labelStr = _.pluck(labels,'textContent');
    expect(labelStr).to.eql(['1a','2a','3a','4a']);
  });

  it('should call setIndVarOptionOnSample on form change', function () {
    var form = TestUtils.scryRenderedDOMComponentsWithTag(selectableOptions, 'form');
    TestUtils.Simulate.change(form[0]);
    expect(actions.setIndVarOptionOnSample).to.have.been.called;
  });
});












