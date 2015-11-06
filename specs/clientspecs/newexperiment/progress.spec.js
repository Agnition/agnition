var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');
var Immutable = require('immutable');

//Mock Dom Setup
require('../index.js')();

var Progress = mockRequire('../../../server/client/containers/NewExperiment/components/ProgressWrapper', {
  './ProgressName': utils.mockDivComponent('progress-name'),
  './ProgressHypothesis': utils.mockDivComponent('progress-hypothesis'),
  '../../../components/viewexperiment/DepVar': utils.mockDivComponent('progress-depvar'),
  '../../../components/viewexperiment/IndVar': utils.mockDivComponent('progress-indvar'),
}, {jsx: true});

describe('New Experiment: Progress Component', function () {
  var progress;
  beforeEach(function () {
    var props = {
      expId: 'a',
    };

    //this is our mock of the DepVar state property
    var obj = {
      NewExperiment: {
        question: 5,
        valid: false
      },
      Experiments : {
        a: {
          name: 'Name : Test Name',
          hypothesis: 'test hypothesis',
          cause: 'test cause',
          effect: 'test effect',
          depVars: Immutable.List(),
          indVars: Immutable.List()
        }
      }
    };

    props.store = mockStore(obj);

    progress = TestUtils.renderIntoDocument(React.createElement(Progress, props), 'root');
  });

  it('should render the current progress from props', function () {
    var  name = TestUtils.findRenderedDOMComponentWithClass(progress,'progress-name');
    var  hypothesis = TestUtils.findRenderedDOMComponentWithClass(progress,'progress-hypothesis');
    var  depvar = TestUtils.findRenderedDOMComponentWithClass(progress,'progress-depvar');
    var  indvar = TestUtils.findRenderedDOMComponentWithClass(progress, 'progress-indvar');
    expect(name).to.exist;
    expect(hypothesis).to.exist;
    expect(depvar).to.exist;
    expect(indvar).to.exist;
  });
});
