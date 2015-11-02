var index = require('../../../index.js')();
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../../../utils/utils');
var sampleObj = require('./barchartmocksample.json');

var BarChart = mockRequire('../../../../../server/client/containers/AnalyzeExperiment/MeasureNumeric/OptionList/BarChart', {
  '../../../../../../lib/react-d3': {
    BarChart : utils.mockDivComponent('chart')
  },
  }, {jsx: true});

describe('MeasureNumeric OptionList BarChart Component', function () {
  var barChart;
  beforeEach(function () {
    var props = {};
    props.samples = sampleObj;
    props.indVar = { options: [ 'horse', 'pig' ], name: 'proffesional sounding name' };
    props.measure = { samples: [ 'sa', 'sb', 'sc', 'sd', 'se' ], _id: 'b' };
    barChart = TestUtils.renderIntoDocument(React.createElement(BarChart, props), 'root');
  });

  it('should render a bar chart element', function () {
    var chartComponent = TestUtils.findRenderedDOMComponentWithClass(barChart,'chart');
    var renderedElement = JSON.parse(chartComponent.textContent);
    expect(renderedElement.data).to.eql([{"values":[{"x":"horse","y":2},{"x":"pig","y":5}]}]);

  });

});
