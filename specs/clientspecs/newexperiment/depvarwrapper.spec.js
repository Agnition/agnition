//fake dom go first
require('../index.js')();
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mockStore = require('../../utils/mockStore');
var utils = require('../../utils/utils');
var mockRequire = require('mockrequire');

var DepVarWrapper = mockRequire('../../../server/client/containers/NewExperiment/DepVarWrapper',{
  './DepVar' : utils.mockDivComponent('ind-var')
}, {jsx:true});

describe('the DepVarWrapper Container', function () {
  var depVarWrapper, actions;
  beforeEach(function () {
    var props = {};
    var obj = {
      Experiments : {
        'a': { 
          depVars : []
        }
      }
    };
    props.store = mockStore(obj);
    props.expId = 'a';
    depVarWrapper = TestUtils.renderIntoDocument(React.createElement(DepVarWrapper, props), 'root');
    actions = sinon.stub(depVarWrapper.dispatchProps.actions);


  });

  it('should call the correct actions on button press', function () {
    var count = function() {
      return TestUtils.scryRenderedDOMComponentsWithClass(depVarWrapper, 'ind-var');
    };
    var  button = TestUtils.findRenderedDOMComponentWithTag(depVarWrapper,'button');
    TestUtils.Simulate.click(button);
    expect(actions.createDepVar).to.have.been.calledOnce;
    expect(actions.addDepVar).to.have.been.calledOnce;
  });
});



































// var index = require('../index.js')();
// var mocha = require('mocha');
// var expect = require('chai').expect;

// var React = require('react');
// var ReactDOM = require('react-dom');
// var TestUtils = require('react-addons-test-utils');
// var mockStore = require('../../utils/mockStore');
// var mockRequire = require('mockrequire');
// var utils = require('../../utils/utils');

// //Dom Mocking setup..
// //mock out the sub-component
// var DepVarWrapper = mockRequire('../../../server/client/containers/NewExperiment/DepVarWrapper', {
//   './DepVar': utils.mockDivComponent('depVar'),
// }, {jsx: true});


// describe('DepVar Wrapper', function () {
//   var depVarWrapper;
//   var root;
//   beforeEach(function () {
//     root = document.createElement('div');
//     var props = {};

//     //this is our mock of the DepVar state property
//     var obj = {
//       Experiments : {
//         a : {name: 'whispering', active: true,  depVars : []},
//         b : {name: 'stalking tactics', active: false}
//       },
//     };

//     props.store = mockStore(obj);
//     props.expId = 'a';

//     depVarWrapper = TestUtils.renderIntoDocument(React.createElement(DepVarWrapper, props), root);
//   });
  
//   afterEach(function () {
//     ReactDOM.unmountComponentAtNode(root);
//   });

//   it('should create new sub components on button click', function () {
//     var button = TestUtils.findRenderedDOMComponentWithTag(depVarWrapper, 'button');
//     expect(count().length).to.eql(0);
//     TestUtils.Simulate.click(button);
//     TestUtils.Simulate.click(button);
//     var divs = TestUtils.scryRenderedDOMComponentsWithClass(depVarWrapper, 'depVar');
//     expect(divs.length).to.equal(2);
//   });
// });
