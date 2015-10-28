//fake dom go first
require('../index.js')();
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mockStore = require('../../utils/mockStore');
var utils = require('../../utils/utils');
var mockRequire = require('mockrequire');

var DepVarWrapper = mockRequire('../../../server/client/containers/NewExperiment/DepVarWrapper',{
  './DepVar' : utils.mockDivComponent('ind-var')
}, {jsx:true});

describe('the DepVarWrapper Container', function () {
  var depVarWrapper, actions;
  beforeEach(function () {
    var props = {};
    var obj = {
      Experiments : {
        'a': { 
          depVars : []
        }
      }
    };
    props.store = mockStore(obj);
    props.expId = 'a';
    depVarWrapper = TestUtils.renderIntoDocument(React.createElement(DepVarWrapper, props), 'root');
    actions = sinon.stub(depVarWrapper.dispatchProps.actions);


  });

  it('should call the correct actions on button press', function () {
    var count = function() {
      return TestUtils.scryRenderedDOMComponentsWithClass(depVarWrapper, 'ind-var');
    };
    var  button = TestUtils.findRenderedDOMComponentWithTag(depVarWrapper,'button');
    TestUtils.Simulate.click(button);
    expect(actions.createDepVar).to.have.been.calledOnce;
    expect(actions.addDepVar).to.have.been.calledOnce;
  });
});
