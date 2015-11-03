var mocha = require('mocha');
var expect = require('chai').expect;
var Immutable = require('immutable');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');

//mock out the sub-component
var ViewExp = mockRequire('../../../server/client/components/viewexperiment/ViewExperiment', {
  './DepVar': React.createClass({
    render: function() {return (<div> </div>);}
  }),
  './IndVar': React.createClass({
    render: function() {return (<div> </div>);}
  }),
  '../../containers/AnalyzeExperiment/MeasureNumeric/OptionList/ChartWrapper.js': React.createClass({
    render: function() {return (<div> </div>);}
  })
}, {jsx: true});

//Dom Mocking setup..
var index = require('../index.js')();

describe('View experiment container', function () {
  var depVar;
  beforeEach(function () {
    var props = {};

    //this is our mock of the DepVar state property
    var obj = require('./ViewExperimentSampleData.json');
    obj.Experiments = Immutable.fromJS(obj.experiments);
    obj.DepVars = Immutable.fromJS(obj.depVars);
    obj.IndVars = Immutable.fromJS(obj.indVars);
    obj.Measures = Immutable.fromJS(obj.measures);
    props.store = mockStore(obj);

    //also need to pass in keys
    props.depVarIds = ['a','b'];
    props.params = {};
    props.params.expid = '562ebfa6a3b7183b57d3ed41';

    depVar = TestUtils.renderIntoDocument(React.createElement(ViewExp, props), 'root');
  });

  it('should show progress', function () {
    var ps = TestUtils.scryRenderedDOMComponentsWithClass(depVar, 'guide');
    expect(ReactDOM.findDOMNode(ps[0]).textContent).to.eql('You have submitted 0 samples out of the required 2');
  });



});
