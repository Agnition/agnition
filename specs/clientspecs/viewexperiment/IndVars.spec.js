var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');

//mock out the sub-component
var IndVar = mockRequire('../../../server/client/components/viewexperiment/IndVar', {}, {jsx: true});

//Dom Mocking setup..
var index = require('../index.js')();

describe('indVarsComponent', function () {
  var indVar;
  beforeEach(function () {
    var props = {};

    //this is our mock of the IndVar state property
    var obj = {
      IndVars : {
        a : {name: 'weezy',options:[1,2,3]},
      },
    };
    props.store = mockStore(obj);

    //also need to pass in keys
    props.indVars = ['a'];

    indVar = TestUtils.renderIntoDocument(React.createElement(IndVar, props), 'root');
  });

  it('should properly map the ids and render the names to <h3s>', function () {
    var definitionSets = TestUtils.scryRenderedDOMComponentsWithClass(indVar,'definition-set');
    expect(ReactDOM.findDOMNode(definitionSets[0]).textContent).to.contain('weezy');
  });



});
