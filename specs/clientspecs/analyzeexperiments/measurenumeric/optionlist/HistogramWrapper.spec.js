var index = require('../../../index.js')();
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockRequire = require('mockrequire');
var utils = require('../../../../utils/utils');
var samples = require('./histogramwrappermockstate.json');


var HistogramWrapper = mockRequire('../../../../../server/client/containers/AnalyzeExperiment/MeasureNumeric/OptionList/HistogramWrapper', {
  '../../../../../../lib/react-d3': {
    AreaChart : utils.mockDivComponent('chart')
  },
  }, {jsx: true});

describe('MeasureNumeric OptionList Histogram Component', function () {
  var histograms;
  beforeEach(function () {
    var props = {};
    props.samples = samples;
    histograms = TestUtils.renderIntoDocument(React.createElement(HistogramWrapper, props), 'root');
  });

  it('render the correct number of histograms', function () {
    var chartComponents = TestUtils.scryRenderedDOMComponentsWithClass(histograms,'chart');
    expect(chartComponents.length).to.eql(2);
  });

  it('should render the chart objects with consistent scales', function () {
    var chartComponents = TestUtils.scryRenderedDOMComponentsWithClass(histograms,'chart');
    var chart1 = JSON.parse(chartComponents[0].textContent);
    var chart2 = JSON.parse(chartComponents[1].textContent);
    expect(chart1.xScale).to.eql(chart2.xScale);
    expect(chart1.yScale).to.eql(chart2.yScale);
  });

  xit('should render the chart objects the right scales', function () {
    var chartComponents = TestUtils.scryRenderedDOMComponentsWithClass(histograms,'chart');
    var chart1 = JSON.parse(chartComponents[0].textContent);
    var chart2 = JSON.parse(chartComponents[1].textContent);
    expect(chart1.xScale).to.eql([0,97]);
    expect(chart1.yScale).to.eql([0,0]);
  });
});
