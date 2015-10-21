var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;

var index = require('./index.js');
var TopNav = require('../../server/client/components/TopNav.js').TopNav;

describe('TopNav', function () {
  describe('General Interface', function () {
    it('should show sign in when not signed in', function () {
      //setup
      var props = {};

      var option = TestUtils.renderIntoDocument(React.createElement(TopNav, props), 'root');

      var signin = TestUtils.scryRenderedDOMComponentsWithClass(option,'signin');
      var signout = TestUtils.scryRenderedDOMComponentsWithClass(option,'signout');
      //tests
      expect(signin.length).to.eql(1);
      expect(signout.length).to.eql(0);
    });

    it('should show sign out when signed in', function () {
      //setup
      var props = {
        username : 'Ash',
      };
      var option = TestUtils.renderIntoDocument(React.createElement(TopNav, props), 'root');

      var signin = TestUtils.scryRenderedDOMComponentsWithClass(option,'signin');
      var signout = TestUtils.scryRenderedDOMComponentsWithClass(option,'signout');
      //tests
      expect(signin.length).to.eql(0);
      expect(signout.length).to.eql(1);
    });
  });
});

//http://www.omerwazir.com/posts/react-getdomnode-replaced-with-findDOMNode/
