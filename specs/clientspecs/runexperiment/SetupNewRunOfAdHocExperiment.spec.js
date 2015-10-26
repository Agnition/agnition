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
  './SelectNonRandomOptions': utils.mockDivComponent('non-random-options')
}, {jsx:true});

describe('SetupNewRunOfAdHocExperiment container', function () {
  var adHocExp;
  beforeEach(function(){
    var props = {};
    var obj = {
      Experiments: {
        acre:{
          independentVars: ['barn','cow','donkey']
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

  it('should pass the correct indvars and sample to', function () {
    var nonRands = TestUtils.scryRenderedDOMComponentsWithClass(adHocExp, 'non-random-options');
    var text = _.pluck(nonRands,'textContent');
    expect(text).to.eql(['{"indVarIds":["barn","cow"],"sampleId":"sickle"}']);
  });

});
