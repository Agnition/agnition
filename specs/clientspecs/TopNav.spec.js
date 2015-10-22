var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;

var index = require('./index.js');
var TopNav = require('../../server/client/components/TopNav.js');

describe('TopNav', function () {

  function createMockStore(state) {
    return {
      subscribe: () => {},
      dispatch: () => {},
      getState: () => {
        return {...state};
      }
    };
  }

  describe('General Interface', function () {
    it('should show sign in when not signed in', function () {
      //setup
      var mockState = {};
      mockState.Users = Immutable.Map({
        username: undefined
      });

      var option = TestUtils.renderIntoDocument(<TopNav store={createMockStore(mockState)} />, 'root');

      var nav = TestUtils.scryRenderedDOMComponentsWithTag(option,'nav');
      //tests
      expect(ReactDOM.findDOMNode(nav[0]).textContent).to.contain('sign in');
      expect(ReactDOM.findDOMNode(nav[0]).textContent).to.not.contain('sign out');
    });

    it('should show sign out when signed in', function () {
      //setup
      var mockState = {};
      mockState.Users = Immutable.Map({
        username: 'Ash'
      });

      var option = TestUtils.renderIntoDocument(<TopNav store={createMockStore(mockState)} />, 'root');

      var nav = TestUtils.scryRenderedDOMComponentsWithTag(option,'nav');
      //tests
      expect(ReactDOM.findDOMNode(nav[0]).textContent).to.not.contain('sign in');
      expect(ReactDOM.findDOMNode(nav[0]).textContent).to.contain('sign out');
    });
  });
});

//http://www.omerwazir.com/posts/react-getdomnode-replaced-with-findDOMNode/
