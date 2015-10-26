var mocha = require('mocha');
var expect = require('chai').expect;

var Immutable = require('immutable');

var DepVars = require('../../../server/client/reducers/DepVars');

describe('Dep Variable Reducer', function(){
  it('should create an immutable map from an object', function () {
    var action = {};
    action.depVars = {
      a: {
        name : 'distance'
      },
      b: {
        name : 'happiness'
      }
    };
    action.type = 'SET_DEP_VARS';
    var state = DepVars(null, action);
    expect(state.getIn(['a', 'name'])).to.eql('distance');
  });

  it('should create a new dep variable', function () {
    var action = {};
    action.depVars = {
      a: {
        name : 'distance'
      }
    };
    action.type = 'SET_DEP_VARS';
    var state = DepVars(null, action);

    var action = {};
    action.depVarId = 'b';
    action.type = 'CREATE_DEP_VAR';
    state = DepVars(state, action);

    expect(state.get('b')).to.not.eql(undefined);
  });

  it('should set name', function () {
    var action = {};
    action.depVars = {
      a: {
        name : 'distance'
      }
    };
    action.type = 'SET_DEP_VARS';
    var state = DepVars(null, action);

    var action = {};
    action.name = 'other name';
    action.type = 'SET_DEP_VAR_NAME';
    action.depVarId = 'a';
    var state = DepVars(state, action);
    expect(state.getIn(['a', 'name'])).to.eql('other name');
  });

  it('should add measures', function () {
    var action = {};
    action.depVars = {
      a: {
        name : 'distance',
        measures: new Immutable.List()
      }
    };
    action.type = 'SET_DEP_VARS';
    var state = DepVars(null, action);
    expect(state.getIn(['a', 'measures']).size).to.eql(0);

    var action = {};
    action.measureId = '1';
    action.depVarId = 'a';
    action.type = 'ADD_MEASURE';
    var state = DepVars(state, action);
    expect(state.getIn(['a', 'measures']).size).to.eql(1);
  });
});
