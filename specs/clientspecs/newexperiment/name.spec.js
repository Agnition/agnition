var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
// var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');
var Name = require('../../../server/client/containers/NewExperiment/Name');
//Dom Mocking setup..
var index = require('../index.js')();

//mock out the sub-component
// var MyExperiments = mockRequire('../../../server/client/containers/NewExperiment/Name', {
//   './ExpsTable': utils.mockDivComponent('exp-table'),
// }, {jsx: true});


describe('New Experiment: Name Component', function () {
  var name;
  beforeEach(function () {
    var props = {};

    //this is our mock of the DepVar state property
    var obj = {};


    props.store = mockStore(obj);

    name = TestUtils.renderIntoDocument(React.createElement(Name, props), 'root');

  });

  it('should have two buttons', function () {
    var input = TestUtils.scryRenderedDOMComponentsWithTag(name,'input');
    expect(input.length).to.eql(1);

  });
});
