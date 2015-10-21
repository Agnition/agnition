var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;

var index = require('../index.js');
var Measure = require('../../../server/client/components/viewexperiment/Measure.js');

describe('Measures', function () {
  describe('General Interface', function () {
    it('It should be able to access the measure properties', function () {
      //setup
      var props = {
        measure : {
          kind : 'qualitative',
          list : ['best','pokemon','friends']
        }
      };
      var measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');

      //tests
      expect(measure.props.measure.kind).to.eql('qualitative');
      expect(measure.props.measure.list).to.deep.eql(['best','pokemon','friends']); 
    });

    describe('Get Basis(measure)', function () {
      var props, measure;
      beforeEach(function(){
        props = {
          measure : {
            kind : '',
            list : ['best','pokemon','friends'],
            scale : ['worst','pokemon','friends'],
            unit : 'pokemon'
          }
        };
        measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');
      });

      it('should set the basis to measure.list when measure.kind === `qualitative`', function () {
        props.measure.kind = 'qualitative';
        expect(measure.getBasis(props.measure)).eql(['best','pokemon','friends']);
      });

      it('should set the basis to measure.scale when measure.kind === `scale`', function () {
        props.measure.kind = 'scale';
        expect(measure.getBasis(props.measure)).eql(['worst','pokemon','friends']);
      });

      it('should set the basis to measure.unit when measure.kind === `numeric`', function () {
        props.measure.kind = 'numeric';
        expect(measure.getBasis(props.measure)).eql('pokemon');
      });

    });

    describe('Render() & BasisSpan', function () {
      var props, measure, spans;
      beforeEach(function(){
        props = {
          measure : {
            kind : 'qualitative',
            list : ['best','pokemon','friends'],
            scale : ['worst','pokemon','friends'],
            unit : 'pokemon'
          }
        };
        measure = TestUtils.renderIntoDocument(React.createElement(Measure, props), 'root');
        spans = TestUtils.scryRenderedDOMComponentsWithTag(measure,'span');
        
      });

      it('should render the passed in properties', function () {
        expect(ReactDOM.findDOMNode(spans[0]).textContent).to.eql('bestpokemonfriends');
        expect(ReactDOM.findDOMNode(spans[1]).textContent).to.eql('best');
        expect(ReactDOM.findDOMNode(spans[2]).textContent).to.eql('pokemon');
        expect(ReactDOM.findDOMNode(spans[3]).textContent).to.eql('friends');

        //checking to see if it is appending the class name
        expect(ReactDOM.findDOMNode(spans[1]).className).to.eql('basis');
      });
    });
  });
});

//http://www.omerwazir.com/posts/react-getdomnode-replaced-with-findDOMNode/
