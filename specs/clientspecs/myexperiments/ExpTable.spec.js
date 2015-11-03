var ExpsTable = require('../../../server/client/components/myexperiments/ExpsTable');

var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

//setup
var index = require('../index.js')();


describe('ExpsTable Component', function () {
  var expTable;
  beforeEach(function () {
    var props = {};
    props.exps = [
      {
        _id : '1',
        active: true,
        name : 'the dark',
        hypothesis: 'im afraid of the dark',
        conclusion: 'tbd',
      },
        {
        _id : '2',
        active: false,
        name : 'cats',
        hypothesis: 'im afraid of cats',
        conclusion: 'yep super afraid of cats',
      }
    ];

    expTable = TestUtils.renderIntoDocument(React.createElement(ExpsTable, props), 'root');
  });
  it('should properly render table header', function () {
    var trs = TestUtils.scryRenderedDOMComponentsWithTag(expTable,'tr');
    expect(ReactDOM.findDOMNode(trs[0]).children.length).to.eql(3);
    expect(ReactDOM.findDOMNode(trs[0]).children[0].textContent).to.eql('Name');
  });

  it('should properly setup a row', function () {
    var trs = TestUtils.scryRenderedDOMComponentsWithTag(expTable,'tr');
    expect(ReactDOM.findDOMNode(trs[1]).children.length).to.eql(3);
    expect(ReactDOM.findDOMNode(trs[1]).children[0].textContent).to.eql('the dark');
  });
});
