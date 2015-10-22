var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;

var index = require('../index.js');
var Hypothesis = require('../../../server/client/containers/NewExperiment/Hypothesis.js');
var Immutable = require('immutable');



function createMockStore(state) {
  return {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return {...state};
    }
  };
}
var measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');

