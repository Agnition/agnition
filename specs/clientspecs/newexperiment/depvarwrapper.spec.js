//fake dom go first
require('../index.js')();
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var Immutable = require('immutable');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mockStore = require('../../utils/mockStore');
var utils = require('../../utils/utils');
var mockRequire = require('mockrequire');

var DepVarWrapper = mockRequire('../../../server/client/containers/NewExperiment/DepVarWrapper',{
  './DepVar' : utils.mockDivComponent('dep-var')
}, {jsx:true});

describe('the DepVarWrapper Container', function () {
  var depVarWrapper, actions;
  beforeEach(function () {
    var props = {};
    var obj = {
      Experiments : {
        'a': {
          depVars : Immutable.List()
        }
      }
    };
    props.store = mockStore(obj);
    props.expId = 'a';
    depVarWrapper = TestUtils.renderIntoDocument(React.createElement(DepVarWrapper, props), 'root');
    actions = sinon.stub(depVarWrapper.dispatchProps.actions);
  });

  xit('should call the correct actions on button press', function () {
    var div = TestUtils.scryRenderedDOMComponentsWithTag(depVarWrapper, 'div');
    expect(div.length).to.eql(1);
  });
});
