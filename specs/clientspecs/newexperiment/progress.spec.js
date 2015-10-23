var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');
var Progress = require('../../../server/client/containers/NewExperiment/components/NewExperimentProgress');

//Mock Dom Setup
require('../index.js')();

describe('New Experiment: Progress Component', function () {
  var progress;
  beforeEach(function () {
    var props = {
      expId: 'a'
    };

    //this is our mock of the DepVar state property
    var obj = {
      Experiments : {
        a: {
          name: 'Test Name',
          hypothesis: 'test hypothesis',
          cause: 'test cause',
          effect: 'test effect'
        }
      }
    };

    props.store = mockStore(obj);

    progress = TestUtils.renderIntoDocument(React.createElement(Progress, props), 'root');
  });

  it('should render the current progress from props', function () {
    var  title = TestUtils.findRenderedDOMComponentWithTag(progress,'h4');
    var  divs = TestUtils.scryRenderedDOMComponentsWithClass(progress,'progress');
    expect(title.textContent).to.contain('Test Name');
    expect(divs[0].textContent).to.contain('test hypothesis');
    expect(divs[1].textContent).to.contain('test cause');
    expect(divs[2].textContent).to.contain('test effect');
  });
});
