var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;

var index = require('../index.js');
var Option = require('../../../server/client/components/viewexperiment/Option.js');

describe('Options', function () {
  describe('General Interface', function () {
    it('It should be able to access the option properties', function () {
      //setup
      var props = {
        option : {
          name : '# drinks',
          options : ['1','2','shitfaced']
        }
      };
      var option = TestUtils.renderIntoDocument(React.createElement(Option, props), 'root');

      //tests
      expect(option.props.option.name).to.eql('# drinks');
      expect(option.props.option.options).to.deep.eql(['1','2','shitfaced']); 
    });

    describe('Render()', function () {
      var props, option, spans;
      beforeEach(function(){
        props = {
          option : {
            name : '# drinks',
            options : ['1','2','shitfaced']
          }
        };
        option = TestUtils.renderIntoDocument(React.createElement(Option, props), 'root');
        spans = TestUtils.scryRenderedDOMComponentsWithTag(option,'span');
        
      });

      it('should render the passed in properties', function () {
        expect(ReactDOM.findDOMNode(spans[0]).textContent).to.eql('12shitfaced');
        expect(ReactDOM.findDOMNode(spans[1]).textContent).to.eql('1');
        expect(ReactDOM.findDOMNode(spans[2]).textContent).to.eql('2');
        expect(ReactDOM.findDOMNode(spans[3]).textContent).to.eql('shitfaced');

        //checking to see if it is appending the class name
        expect(ReactDOM.findDOMNode(spans[1]).className).to.eql('options');
      });
    });
  });
});

//http://www.omerwazir.com/posts/react-getdomnode-replaced-with-findDOMNode/
