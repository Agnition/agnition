//boilerplate
var index = require('../index.js')();
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var _ = require('underscore');

//require specific components
var ChosenOption = require('../../../server/client/containers/RunAdHocExperiment/ChosenOption.js');

describe('ChosenOption Container', function () {
  var obj;
  var props;
  beforeEach(function () {
    obj = {
      Experiments : {
        e1 : {
          depVars : ['dv1', 'dv2']
        }
      },
      DepVars : {
        dv1 : {
          measures : ['m1', 'm2']
        },
        dv2 : {
          measures : ['m3']
        }
      },
      Measures : {
        m1 : {
          samples : ['s1', 's2']
        },
        m2 : {
          samples : ['s3', 's4']
        },
        m3 : {
          samples : ['s5', 's6']
        }
      },
      Samples : {
        s1 : {
          indVarStates : [
            {
              _id : 'iv1',
              name : 'exp',
              value : '1a'
            }
          ]
        },
        s2 : {
          indVarStates : [
            {
              _id : 'iv1',
              name : 'exp',
              value : '1a'
            }
          ]
        },
        s3 : {
          indVarStates : [
            {
              _id : 'iv1',
              name : 'exp',
              value : '1a'
            }
          ]
        },
        s4 : {
          indVarStates : [
            {
              _id : 'iv1',
              name : 'exp',
              value : '1a'
            }
          ]
        },
        s5 : {
          indVarStates : [
            {
              _id : 'iv1',
              name : 'exp',
              value : '1a'
            }
          ]
        },
        s6 : {
          indVarStates : [
            {
              _id : 'iv1',
              name : 'exp',
              value : '1a'
            }
          ]
        },
        s7 : {},
        s8 : {
          iv1 : {
            value : '4a'
          }
        },
      },
      IndVars : {
        iv1 : {
          name : 'exp',
          options: ['1a','2a'],
          numTrials : 4,
          actionsPerTrial : 1
        },
      },
    };
    props = {};
    props.expId = 'e1';
    props.indVarId = 'iv1';
    props.sampleId = 's7';


  });

  it('should choose one of the indVar options at random', function () {
    obj.IndVars.iv1.options = ['1a'];
    props.store = mockStore(obj);
    var chosenOption = TestUtils.renderIntoDocument(React.createElement(ChosenOption, props), 'root');
    var actions = sinon.stub(chosenOption.dispatchProps.actions);

    //this is effectivlety a test of get options.
    var spans = TestUtils.scryRenderedDOMComponentsWithTag(chosenOption, 'span');
    expect(ReactDOM.findDOMNode(spans[0]).textContent).to.contain('1a');
  });

  it('should call setIndVar Option on page load', function () {
    obj.IndVars.iv1.options = ['1a'];
    props.store = mockStore(obj);
    var chosenOption = TestUtils.renderIntoDocument(React.createElement(ChosenOption, props), 'root');
    var actions = sinon.stub(chosenOption.dispatchProps.actions);

    //this is effectivlety a test of get options.
    chosenOption.forceUpdate()
    expect(actions.setIndVarOptionOnSample).to.have.been.called;
  });

  it('should not choose options that are at max numTrials', function () {
    obj.IndVars.iv1.numTrials = 2;
    props.store = mockStore(obj);
    var chosenOption = TestUtils.renderIntoDocument(React.createElement(ChosenOption, props), 'root');
    var actions = sinon.stub(chosenOption.dispatchProps.actions);

    //this is effectivlety a test of get options.
    var spans = TestUtils.scryRenderedDOMComponentsWithTag(chosenOption, 'span');
    expect(ReactDOM.findDOMNode(spans[0]).textContent).to.contain('2a');
  });

  it('should show option that has already been chosen', function () {
    props.sampleId = 's8';
    props.store = mockStore(obj);
    var chosenOption = TestUtils.renderIntoDocument(React.createElement(ChosenOption, props), 'root');
    var actions = sinon.stub(chosenOption.dispatchProps.actions);

    //this is effectivlety a test of get options.
    var spans = TestUtils.scryRenderedDOMComponentsWithTag(chosenOption, 'span');
    expect(ReactDOM.findDOMNode(spans[0]).textContent).to.contain('4a');
  });

  it('should tell you if all samples have been done', function () {
    obj.IndVars.iv1.numTrials = 1;
    obj.Samples.s2.indVarStates[0].value = '2a';
    obj.Samples.s4.indVarStates[0].value = '2a';
    obj.Samples.s6.indVarStates[0].value = '2a';
    props.store = mockStore(obj);
    var chosenOption = TestUtils.renderIntoDocument(React.createElement(ChosenOption, props), 'root');
    var actions = sinon.stub(chosenOption.dispatchProps.actions);

    //this is effectivlety a test of get options.
    var spans = TestUtils.scryRenderedDOMComponentsWithTag(chosenOption, 'span');
    expect(ReactDOM.findDOMNode(spans[0]).textContent).to.contain('You have done all of the experiments.');

  });

});
