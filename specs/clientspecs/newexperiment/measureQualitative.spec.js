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
          scale: [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
        }
      }
    };

    props.store = mockStore(obj);

    measureQualitative = TestUtils.renderIntoDocument(React.createElement(MeasureQualitative, props), 'root');
  });

  it('should render the current scale correctly', function () {
    // var input = TestUtils.scryRenderedDOMComponentsWithTag(measureQualitative,'input');
    var p     = TestUtils.scryRenderedDOMComponentsWithTag(measureQualitative, 'p');
    expect(p[0].textContent).to.equal('Scale from 1-5');
  });
});
