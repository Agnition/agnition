var ExpsTable = require('../../../server/client/components/myexperiments/ExpsTable');

var mocha = require('mocha');
var expect = require('chai').expect;
var Immutable = require('immutable');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var Provider = require('react-redux').Provider;

//setup
var index = require('../index.js')();


describe('ExpsTable Component', function () {
  var expTable;
  beforeEach(function () {
    var props = {};
    var obj = require('./ExpTableData.json');
    obj.NewExperiment = Immutable.Map({question: 0})
    obj.Experiments = Immutable.fromJS(obj.experiments);
    obj.DepVars = Immutable.fromJS(obj.depVars);
    obj.IndVars = Immutable.fromJS(obj.indVars);
    obj.Measures = Immutable.fromJS(obj.measures);
    var store = mockStore(obj);
    props.exps = obj.Experiments.toJS();

    expTable = TestUtils.renderIntoDocument(React.createElement(Provider, {store : store},
                                                React.createElement(ExpsTable, props)), 'root');
  });
  it('should properly render table header', function () {
    var trs = TestUtils.scryRenderedDOMComponentsWithTag(expTable,'tr');
    expect(ReactDOM.findDOMNode(trs[0]).children.length).to.eql(4);
    expect(ReactDOM.findDOMNode(trs[0]).children[0].textContent).to.eql('Name');
  });

  it('should properly setup a row', function () {
    var trs = TestUtils.scryRenderedDOMComponentsWithTag(expTable,'tr');
    expect(ReactDOM.findDOMNode(trs[1]).children.length).to.eql(4);
    expect(ReactDOM.findDOMNode(trs[1]).children[0].textContent).to.eql('paper chaser scale');
  });

  it('should show the progress of an experiment', function () {
    var tds = TestUtils.scryRenderedDOMComponentsWithTag(expTable,'td');
    expect(ReactDOM.findDOMNode(tds[7]).textContent).to.eql('You\'ve submitted 0 out of 2 samples');
  });
});
