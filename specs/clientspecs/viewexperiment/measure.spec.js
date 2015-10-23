var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;
var mockStore = require('../../utils/mockStore');

var index = require('../index.js')();
var Measure = require('../../../server/client/components/viewexperiment/Measure.js');

describe('Measures', function () {
  describe('Render State', function () {
    var measure;
    beforeEach(function(){
      var props = {};
      //this is our mock of the DepVar state property
      var obj = {
        Measures : {
          a : {
            kind : 'list',
            list : ['best','pokemon','friends'],
          },
          b : {
            kind : 'numeric',
            unit : 'pokemon'
          }
        },
      };
      props.store = mockStore(obj);

      //also need to pass in keys
      props.measureIds = ['a','b'];
      measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');
    });
    it('should render the passed in properties', function () {
      var spans = TestUtils.scryRenderedDOMComponentsWithTag(measure,'span');
      expect(ReactDOM.findDOMNode(spans[1]).textContent).to.eql('bestpokemonfriends');
      expect(ReactDOM.findDOMNode(spans[2]).textContent).to.eql('pokemon');

      // checking to see if it is appending the class name
      expect(ReactDOM.findDOMNode(spans[1]).className).to.eql('basis');
      });
    });
  });

//http://www.omerwazir.com/posts/react-getdomnode-replaced-with-findDOMNode/
