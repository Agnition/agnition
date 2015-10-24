//our mocks
require('../index.js')();
var mockStore = require('../../utils/mockStore');

//testing frameworks
var mocha = require('mocha');
var sinonChai = require('sinon-chai');
var chai = require('chai');
chai.use(sinonChai);
var expect = chai.expect;
var sinon = require('sinon');

//react components
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var IndependentVar = require('../../../server/client/containers/newexperiment/IndependentVar');

describe('the IndependentVar Container', function () {
  var indVar;
  var actions;
  var inputs;
  beforeEach(function () {
    var props = {};
    var obj = {};
    props.store = mockStore({});
    props.indVarId = ['69'];
    indVar = TestUtils.renderIntoDocument(React.createElement(IndependentVar, props), 'root');
    actions = sinon.stub(indVar.dispatchProps.actions);
    inputs = TestUtils.scryRenderedDOMComponentsWithTag(indVar, 'input');
  });

  it('should call setName on name change', function () {
    var element = inputs[0];
    //check to actually make sure we are still pointed at right element
    expect(element._reactInternalComponent._currentElement.ref).to.eql('name');
    TestUtils.Simulate.change(element);
    expect(actions.setName).to.have.been.called;
  });

  it('should call setActionsPerTrial on actionsPerTrial change', function () {
    var element = inputs[1];
    //check to actually make sure we are still pointed at right element
    expect(element._reactInternalComponent._currentElement.ref).to.eql('actionsPerTrial');
    TestUtils.Simulate.change(element);
    expect(actions.setActionsPerTrial).to.have.been.called;
  });
  it('should call setNumTrials on numTrials change', function () {
    var element = inputs[2];
    //check to actually make sure we are still pointed at right element
    expect(element._reactInternalComponent._currentElement.ref).to.eql('numTrials');
    TestUtils.Simulate.change(element);
    expect(actions.setNumTrials).to.have.been.called;
  });
  it('should call setRandomized on randomized change', function () {
    var element = inputs[3];
    //check to actually make sure we are still pointed at right element
    expect(element._reactInternalComponent._currentElement.ref).to.eql('randomized');
    TestUtils.Simulate.change(element);
    expect(actions.setRandomized).to.have.been.called;
  });
  it('should call pushOption on click', function () {
    var button = TestUtils.scryRenderedDOMComponentsWithTag(indVar, 'button')[0];
    //check to actually make sure we are still pointed at right element
    expect(button.textContent).to.eql('Add an option');
    TestUtils.Simulate.click(button);
    expect(actions.pushOption).to.have.been.called;
  });
  it('should call popOption on click', function () {
    var button = TestUtils.scryRenderedDOMComponentsWithTag(indVar, 'button')[1];
    //check to actually make sure we are still pointed at right element
    expect(button.textContent).to.eql('Undo');
    TestUtils.Simulate.click(button);
    expect(actions.popOption).to.have.been.called;
  });
});
