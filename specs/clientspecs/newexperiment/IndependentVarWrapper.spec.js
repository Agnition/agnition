//fake dom go first
require('../index.js')();
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;
var mockRequire = require('mockrequire');
var mockStore = require('../../utils/mockStore');
var utils = require('../../utils/utils');

var IndependentVarWrapper = mockRequire('../../../server/client/containers/NewExperiment/IndependentVarWrapper',{
  './IndependentVar' : utils.mockDivComponent('ind-var')
}, {jsx:true});

describe('the IndependentVarWrapper Container', function () {
  var indVarWrapper;
  beforeEach(function () {
    var props = {};
    var obj = {};
    props.store = mockStore({});
    props.expId = ['69'];
    indVarWrapper = TestUtils.renderIntoDocument(React.createElement(IndependentVarWrapper, props), 'root');
  });

  it('should add a IndpendentVar on button press', function () {
    var count = function() { 
      return TestUtils.scryRenderedDOMComponentsWithClass(indVarWrapper, 'ind-var');
    };
    var  button = TestUtils.findRenderedDOMComponentWithTag(indVarWrapper,'button');
    expect(count().length).to.eql(0);
    TestUtils.Simulate.click(button);
    expect(count().length).to.eql(1);
  });


});

