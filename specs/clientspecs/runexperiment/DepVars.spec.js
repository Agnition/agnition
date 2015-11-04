var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;

var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');
var sinon = require('sinon');

var postCalled = false;

var DepVars = mockRequire('../../../server/client/containers/RunAdHocExperiment/DepVars', {
  './DepVar': utils.mockDivComponent('depvar'),
  'jquery': (function(){
    var $ = function() {
      return {
        serializeArray: function() {},
        serializeJSON: function() { return {}; }
      };
    };
    $.post = function(route, data, cb) {
      try {
        cb([{
          _id: 'ABCDEFG',
          valid: true,
          value: 3,
          indVarStates: {}
        }]);
      } catch(e) {

      }
      postCalled = true;
    };
    return $;
  })(),
  'jquery-serializejson': {}
}, {jsx: true});

var index = require('../index.js')();

describe('The DepVars sample component', function () {

  var form, server;

  beforeEach(function () {
    var props = {};
    var obj = require('./DepVarsSampleData.json');
    props.store = mockStore(obj);
    props.params = {};
    props.params.expid = '562ebfa6a3b7183b57d3ed41';
    props.params.sampleid = 'exampleSampleId';

    form = TestUtils.renderIntoDocument(React.createElement(DepVars, props), 'root');

  });

  it('should render a depVar for each depVarId', function () {
    var vars = TestUtils.scryRenderedDOMComponentsWithClass(form, 'depvar');
    expect(vars.length).to.eql(1);
  });

  it('should render an input field for each indDepVar', function () {
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(form, 'input');
    expect(inputs.length).to.eql(2); // One indvar, one checkbox
  });

  it('should post the created sample', function () {
    var button = TestUtils.findRenderedDOMComponentWithTag(form, 'button');
    TestUtils.Simulate.submit(button);
    expect(postCalled).to.equal(true);
  });

  xit('should add the sample to the state', function (done) {

  });

});
