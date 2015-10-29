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
var SetupNewRunOfAdHocExperiment = mockRequire('../../../server/client/containers/RunAdHocExperiment/SetupNewRunOfAdHocExperiment',{
  './SelectNonRandomOptions': utils.mockDivComponent('non-random-options'),
  './SelectRandomOptions': utils.mockDivComponent('random-options')
}, {jsx:true});

describe('SetupNewRunOfAdHocExperiment container', function () {
  var adHocExp;
  beforeEach(function(){
    var props = {};
    var obj = {
      Experiments: {
        acre:{
          indVars: ['barn','cow','donkey']
        }
      },
      IndVars : {
        barn: {_id: 'barn', randomized: false },
        cow: {_id: 'cow', randomized: false },
        donkey: {_id: 'donkey', randomized: true },
      }
    };
    props.store = mockStore(obj);
    props.expId = 'acre';
    props.sampleId = 'sickle';
    adHocExp = TestUtils.renderIntoDocument(React.createElement(SetupNewRunOfAdHocExperiment, props), 'root');
  });

  it('should pass the correct indvars and sample to non random indvars', function () {
    var nonRands = TestUtils.scryRenderedDOMComponentsWithClass(adHocExp, 'non-random-options');
    var text = _.pluck(nonRands,'textContent');
    expect(text).to.eql(['{"indVarIds":["barn","cow"],"sampleId":"sickle"}']);
  });

  it('should pass the correct indvars, sample, and expid to random indvars', function () {
    var rands = TestUtils.scryRenderedDOMComponentsWithClass(adHocExp, 'random-options');
    var text = _.pluck(rands,'textContent');
    expect(text).to.eql(['{"indVarIds":["donkey"],"expId":"acre","sampleId":"sickle"}']);
  });

});
