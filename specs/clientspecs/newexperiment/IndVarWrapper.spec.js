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

var IndVarWrapper = mockRequire('../../../server/client/containers/NewExperiment/IndVarWrapper',{
  './IndVar' : utils.mockDivComponent('ind-var'),
  '../../components/viewexperiment/IndVar.js' : utils.mockDivComponent('ind-var-view')
}, {jsx:true});

describe('the IndVarWrapper Container', function () {
  var indVarWrapper, actions;
  beforeEach(function () {
    var props = {};
    var obj = {
      Experiments : {
        'a': {
          indVars : []
        }
      }
    };
    props.store = mockStore(obj);
    props.expId = 'a';
    indVarWrapper = TestUtils.renderIntoDocument(React.createElement(IndVarWrapper, props), 'root');
    actions = sinon.stub(indVarWrapper.dispatchProps.actions);
  });

  it('should call the correct actions on button press', function () {
      var div = TestUtils.findRenderedDOMComponentWithClass(indVarWrapper, 'ind-var-wrapper');
    expect(div).to.exist;
  });
});

