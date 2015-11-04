/* globals beforeEach, describe, it */
var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var MeasureQualitative = require('../../../server/client/containers/NewExperiment/MeasureQualitative.js');

require('../index.js')();


describe('New Experiment: Measure Input (Qualitative/Scale)', function () {
  var measureQualitative;
  beforeEach(function () {
    var props = {
      measureId: 'a'
    };

    // this is our mock of the DepVar state property
    var obj = {
      Measures : {
        a: {
        }
      }
    };

    props.store = mockStore(obj);

    measureQualitative = TestUtils.renderIntoDocument(React.createElement(MeasureQualitative, props), 'root');
  });

  it('should render the current scale correctly', function () {
    // var input = TestUtils.scryRenderedDOMComponentsWithTag(measureQualitative,'input');
    var h4     = TestUtils.scryRenderedDOMComponentsWithTag(measureQualitative, 'h4');
    expect(h4[0].textContent).to.equal('Scale from 1-5');
  });
});
