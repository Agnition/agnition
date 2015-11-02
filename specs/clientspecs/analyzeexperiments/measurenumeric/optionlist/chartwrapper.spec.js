var index = require('../../../index.js')();
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../../../utils/utils');
var stateObj = mockStore(require('./chartmockstate.json'));

var ChartWrapper = mockRequire('../../../../../server/client/containers/AnalyzeExperiment/MeasureNumeric/OptionList/ChartWrapper', {
  './AnovaResult': utils.mockDivComponent('anova-result'),
  './BarChart': utils.mockDivComponent('bar-chart'),
  './HistogramWrapper': utils.mockDivComponent('histogram-wrapper'),
  './StatsTable': utils.mockDivComponent('stats-table'),
  }, {jsx: true});

describe('MeasureNumeric OptionList BarChart Component', function () {
  var barChart;
  beforeEach(function () {
    var props = {};
    props.store = stateObj;
    props.indVarId = 'a';
    props.measureId = 'b';
    barChart = TestUtils.renderIntoDocument(React.createElement(ChartWrapper, props), 'root');
  });

  it('should correctly map state to props', function () {
    var props = barChart.nextState;
    expect(props.indVar).to.eql({ options: [ 'horse', 'pig' ], name: 'proffesional sounding name' });
    expect(props.measure).to.eql({ samples: [ 'sa', 'sb', 'sc', 'sd', 'se' ], _id: 'b' });
    expect(props.samples.samples.length).to.eql(5);
  });

});
