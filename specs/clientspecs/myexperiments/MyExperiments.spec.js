var mocha = require('mocha');
var expect = require('chai').expect;

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');

//Dom Mocking setup..
var index = require('../index.js')();

//mock out the sub-component
var MyExperiments = mockRequire('../../../server/client/components/myexperiments/MyExperiments', {
  './ExpsTable': utils.mockDivComponent('exp-table'),
}, {jsx: true});


describe('MyExperiments Component', function () {
  var myExperiments;
  beforeEach(function () {
    var props = {};

    //this is our mock of the DepVar state property
    var obj = {
      Experiments : {
        a : {name: 'whispering', active: true},
        b : {name: 'stalking tactics', active: false}
      },
    };

    props.store = mockStore(obj);

    myExperiments = TestUtils.renderIntoDocument(React.createElement(MyExperiments, props), 'root');
  });

  it('should properly pass in exp to open/ closed tables', function () {
    var  expTables = TestUtils.scryRenderedDOMComponentsWithClass(myExperiments,'exp-table');
    expect(expTables[0].textContent).to.contain('whispering');
    expect(expTables[1].textContent).to.contain('stalking');
  });
});



