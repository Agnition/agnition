var React = require('react');
var mocha = require('mocha');
var expect = require('chai').expect;
var TestUtils = require('react-addons-test-utils');
var index = require('./index.js');
var Measure = require('../../server/client/components/viewexperiment/Measure.js');

describe('test', function () {

  it('It should have access to its own props', function () {
    var props = {
      kind: 'category'
    };
    var measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');
    expect(measure.props.kind).to.eql('category');
  });
});