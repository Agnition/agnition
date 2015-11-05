var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var _ = require('underscore');
//mock out the sub-component
var DepVar = mockRequire('../../../server/client/components/viewexperiment/DepVar', {
  './Measure': React.createClass({
    render: function() {return(<div></div>)}
  })
}, {jsx: true});

//Dom Mocking setup..
var index = require('../index.js')();

describe('depVarsComponent', function () {
  var depVar;
  beforeEach(function () {
    var props = {};

    //this is our mock of the DepVar state property
    var obj = {
      DepVars : {
        a : {name: 'Weezy'},
        b : {name: 'Steve'}
      },
    };
    props.store = mockStore(obj);

    //also need to pass in keys
    props.depVarIds = ['a','b'];

    depVar = TestUtils.renderIntoDocument(React.createElement(DepVar, props), 'root');
  });

  xit('should properly map the ids and render the names to <h3s>', function () {
    var spans = TestUtils.scryRenderedDOMComponentsWithTag(depVar,'div');
    var spanText = _.reduce(spans, function(memo, span){
      return memo + " " + span.textContent
    }, " ")
    expect(spanText).to.contain('Weezy');
    expect(spanText).to.contain('Steve');
  });



});
