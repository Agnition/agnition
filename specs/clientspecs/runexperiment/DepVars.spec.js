var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

var mocha = require('mocha');
var expect = require('chai').expect;

var mockStore = require('../../utils/mockStore');
var mockRequire = require('mockrequire');
var utils = require('../../utils/utils');

var DepVars = mockRequire('../../../server/client/containers/RunAdHocExperiment/DepVars', {
  './DepVar': utils.mockDivComponent('depvar'),
  'jquery': (function(){
    var $ = function() {
      return {
        serializeArray: function() {},
        serializeJSON: function() {}
      };
    };
    $.post = function() {};
    return $;
  })(),
  'jquery-serializejson': {}
}, {jsx: true});

var index = require('../index.js')();

describe('The DepVars sample component', function () {

  var form;

  beforeEach(function () {
    var props = {};
    var obj = {
      Experiments : {
        q : {
          depVars : ['x', 'y', 'z']
        }
      },
      Samples : {
        s : {
          indVarStates : [
            {
              _id : 'a',
              value : 5,
              name : 'beers'
            },
            {
              _id : 'b',
              value : 3,
              name : 'meals'
            }
          ]
        }
      }
    };
    props.store = mockStore(obj);
    //also need to pass in keys
    props.params = {};
    props.params.expid = 'q';
    props.params.sampleid = 's';

    form = TestUtils.renderIntoDocument(React.createElement(DepVars, props), 'root');

  });

  it('should render a depVar for each depVarId', function () {
    var vars = TestUtils.scryRenderedDOMComponentsWithClass(form, 'depvar');
    expect(vars.length).to.eql(3);
  });

  it('should render an input field for each indDepVar', function () {
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(form, 'input');
    expect(inputs.length).to.eql(2);
  });

});
