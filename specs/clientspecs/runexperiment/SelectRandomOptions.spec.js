//boilerplate
var index = require('../index.js')();
var mocha = require('mocha');
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var utils = require('../../utils/utils');

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var _ = require('underscore');

//require specific components
var SelectRandomOptions = mockRequire('../../../server/client/containers/RunAdHocExperiment/SelectRandomOptions',{
  './ChosenOption': utils.mockDivComponent('chosen-option')
}, {jsx:true});


describe('SelectRandomOptions container', function () {
  var randomOptions;
  beforeEach(function(){
    var props = {};
    props.indVarIds = ['a','b'];
    props.sampleId = 'sampleId';
    props.expId = 'expId';
    randomOptions = TestUtils.renderIntoDocument(React.createElement(SelectRandomOptions, props), 'root');
  });

  it('should properly render the options to the DOM ', function () {
    var options = TestUtils.scryRenderedDOMComponentsWithClass(randomOptions, 'chosen-option');
    var optArray = _.pluck(options,'textContent');
    expect(optArray[0]).to.eql('{"indVarId":"a","sampleId":"sampleId","expId":"expId"}');
    expect(optArray[1]).to.eql('{"indVarId":"b","sampleId":"sampleId","expId":"expId"}');
  });

});
