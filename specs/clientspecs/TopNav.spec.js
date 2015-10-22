var React = require('react');
var Provider = require('react-redux').Provider;
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var Immutable = require('immutable');

var mocha = require('mocha');
var expect = require('chai').expect;

var index = require('./index.js');
var TopNav = require('../../server/client/components/TopNav.js');

var Measure = require('../../server/client/components/viewexperiment/Measure.js');

function createMockStore(state) {
  return {
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return {...state};
    }
  };
}

describe('TopNav', function(){

  it('should have sign in when not signed in', function () {
    var mockState = {};
    mockState.User = Immutable.Map({
      username: undefined
    });

    var nav = TestUtils.renderIntoDocument(
      <Provider store={createMockStore(mockState)}>
        <TopNav />
      </Provider>, 'root');

    var signins = TestUtils.scryRenderedDOMComponentsWithClass(nav,'signin');
    var logouts = TestUtils.scryRenderedDOMComponentsWithClass(nav,'logout');
    expect(signins.length).to.eql(1);
    expect(logouts.length).to.eql(0);
  });

  it('should have log out when signed in', function () {
    var mockState = {};
    mockState.User = Immutable.Map({
      username: 'Ash'
    });

    var nav = TestUtils.renderIntoDocument(
      <Provider store={createMockStore(mockState)}>
        <TopNav />
      </Provider>, 'root');

    var signins = TestUtils.scryRenderedDOMComponentsWithClass(nav,'signin');
    var logouts = TestUtils.scryRenderedDOMComponentsWithClass(nav,'logout');
    expect(signins.length).to.eql(0);
    expect(logouts.length).to.eql(1);
  });
});

//http://www.omerwazir.com/posts/react-getdomnode-replaced-with-findDOMNode/
