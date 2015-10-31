var index = require('../../../index.js')();
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var StatsTable = require('../../../../../server/client/containers/AnalyzeExperiment/MeasureNumeric/OptionList/StatsTable');

describe('MeasureNumeric OptionList StatsTable Component', function () {
  var props = {};
  props.samples = {
    '1g': [1, 2, 3, 4, 5],
    '2g': [6, 7, 8, 9, 10]
  };
  var statsTable = TestUtils.renderIntoDocument(React.createElement(StatsTable, props), 'root');

  it('should render one row for each option', function () {
    var trs = TestUtils.scryRenderedDOMComponentsWithTag(statsTable, 'tr');
    expect(trs.length).to.eql(3); // One header, two options
  });

});
