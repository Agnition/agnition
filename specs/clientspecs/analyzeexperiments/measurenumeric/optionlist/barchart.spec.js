var index = require('../../../index.js')();
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../../../utils/utils');
var stateObj = mockStore(require('./barchartmockstate.json'));

var BarChart = mockRequire('../../../../../server/client/containers/AnalyzeExperiment/MeasureNumeric/OptionList/BarChart', {
  'react-d3': {
    BarChart : utils.mockDivComponent('chart')
  },
  }, {jsx: true});

describe('MeasureNumeric OptionList BarChart Component', function () {
  var barChart;
  beforeEach(function () {
    var props = {};
    props.store = stateObj;
    props.indVarId = 'a';
    props.measureId = 'b';
    barChart = TestUtils.renderIntoDocument(React.createElement(BarChart, props), 'root');
  });

  it('should correctly map state to props', function () {
    var props = barChart.nextState;
    expect(props.indVar).to.eql({ options: [ 'horse', 'pig' ], name: 'proffesional sounding name' });
    expect(props.measure).to.eql({ samples: [ 'sa', 'sb', 'sc', 'sd', 'se' ], _id: 'b' });
    console.dir(props.samples);
    expect(props.samples.samples.length).to.eql(5);
  });

  it('should render a bar chart element', function () {
    var chartComponent = TestUtils.findRenderedDOMComponentWithClass(barChart,'chart');
    var renderedElement = JSON.parse(chartComponent.textContent);
    expect(renderedElement.data).to.eql([{"values":[{"x":"horse","y":2},{"x":"pig","y":5}]}]);

  });

});
