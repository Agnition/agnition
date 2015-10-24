var index = require('../index.js')();
var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');

//Dom Mocking setup..

//mock out the sub-component
var DepVarWrapper = mockRequire('../../../server/client/containers/NewExperiment/DepVarWrapper', {
  './DepVar': utils.mockDivComponent('depVar'),
}, {jsx: true});


describe('DepVar Wrapper', function () {
  var depVarWrapper;
  var root;
  beforeEach(function () {
    root = document.createElement('div')
    var props = {};

    //this is our mock of the DepVar state property
    var obj = {
      Experiments : {
        a : {name: 'whispering', active: true},
        b : {name: 'stalking tactics', active: false}
      },
    };


    props.store = mockStore(obj);

    depVarWrapper = TestUtils.renderIntoDocument(React.createElement(DepVarWrapper, props), root);
    var button = depVarWrapper.refs;
    console.log(button);
  });
  afterEach(function () {
    ReactDOM.unmountComponentAtNode(root);
  });

  it('should create new sub components on button click', function () {
    var button = TestUtils.findRenderedDOMComponentWithTag(depVarWrapper, 'button');
    TestUtils.Simulate.click(button);
    TestUtils.Simulate.click(button);
    var divs = TestUtils.scryRenderedDOMComponentsWithClass(depVarWrapper, 'depVar');
    expect(divs.length).to.equal(2);
  });
});
