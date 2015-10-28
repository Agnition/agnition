var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;

var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');

var DepVar = mockRequire('../../../server/client/containers/RunAdHocExperiment/DepVar', {
  './Measure': utils.mockDivComponent('measure'),
}, {jsx: true});

var index = require('../index.js')();

describe('The DepVar sample component', function () {

  it('should render a measure for each measureId', function () {
    var props = {};
    var obj = {
      DepVars : {
        z: {
          name : 'weight',
          measures: ['a', 'b']
        }
      }
    };
    props.store = mockStore(obj);

    //also need to pass in keys
    props.depVarId = 'z';

    var depVar = TestUtils.renderIntoDocument(React.createElement(DepVar, props), 'root');
    var measures = TestUtils.scryRenderedDOMComponentsWithClass(depVar, 'measure');
    expect(measures.length).to.eql(2);
  });

});
