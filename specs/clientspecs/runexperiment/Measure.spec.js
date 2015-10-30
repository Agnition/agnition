var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;
var mockStore = require('../../utils/mockStore');

//setup virtual dom
require('../index.js')();

var Measure = require('../../../server/client/containers/RunAdHocExperiment/Measure.js');

describe('The measure sample component', function () {

  it('should render lists as radio button options', function () {
    var props = {};
    var obj = {
      Measures : {
        a : {
          kind : 'list',
          list : ['best','pokemon','friends'],
        }
      },
    };
    props.store = mockStore(obj);
    props.measureId = 'a';

    var measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');
    var spans = TestUtils.scryRenderedDOMComponentsWithTag(measure,'span');
    expect(ReactDOM.findDOMNode(spans[1]).textContent).to.contain('pokemon');
    expect(ReactDOM.findDOMNode(spans[1]).innerHTML).to.contain('radio');
    expect(spans.length).to.eql(3);
  });

  it('should render scale as radio button options', function () {
    var props = {};
    var obj = {
      Measures : {
        a : {
          kind : 'qualitative',
        }
      },
    };
    props.store = mockStore(obj);
    props.measureId = 'a';

    var measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');
    var spans = TestUtils.scryRenderedDOMComponentsWithTag(measure,'span');
    console.log(ReactDOM.findDOMNode(spans[1]).textContent);
    expect(ReactDOM.findDOMNode(spans[2]).textContent).to.contain('2');
    expect(ReactDOM.findDOMNode(spans[1]).innerHTML).to.contain('radio');
    expect(spans.length).to.eql(8);
  });

  it('should render scale as radio button options', function () {
    var props = {};
    var obj = {
      Measures : {
        a : {
          kind : 'numeric',
          unit : 'feet',
        }
      },
    };
    props.store = mockStore(obj);
    props.measureId = 'a';

    var measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');
    var spans = TestUtils.scryRenderedDOMComponentsWithTag(measure,'span');
    expect(ReactDOM.findDOMNode(spans[0]).innerHTML).to.contain('number');
    expect(spans.length).to.eql(1);
  });

});
