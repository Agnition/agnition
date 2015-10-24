var mocha = require('mocha');
var expect = require('chai').expect;

var Immutable = require('immutable');

var Experiments = require('../../../server/client/reducers/Experiments');

describe('Experiment Reducer', function(){
  it('should create an immutable map from an object', function () {
    var action = {};
    action.experiments = {
      a: {
        name : 'paper chaser scale',
        hypothesis : 'something'
      },
      b: {
        name : 'paper chaser',
        hypothesis : 'airplanes are cool'
      }
    };
    action.type = 'SET_EXPERIMENTS';
    var state = Experiments(null, action);
    expect(state.getIn(['a', 'name'])).to.eql('paper chaser scale');
  });

  it('should create an in map', function () {
    var action = {};
    action.experiments = {
      a: {
        name : 'paper chaser scale'
      }
    };
    action.type = 'SET_EXPERIMENTS';
    var state = Experiments(null, action);

    var action = {};
    action.expId = 'b';
    action.type = 'CREATE_EXPERIMENT';
    state = Experiments(state, action);

    expect(state.get('b')).to.not.eql(undefined);
  });

  it('should set name', function () {
    var action = {};
    action.experiments = {
      a: {
        name : 'paper chaser scale'
      }
    };
    action.type = 'SET_EXPERIMENTS';
    var state = Experiments(null, action);

    var action = {};
    action.name = 'other name';
    action.type = 'SET_NAME';
    action.expId = 'a';
    var state = Experiments(state, action);
    expect(state.getIn(['a', 'name'])).to.eql('other name');
  });

  it('should set hypothesis', function () {
    var action = {};
    action.experiments = {
      a: {
        name : 'paper chaser scale'
      }
    };
    action.type = 'SET_EXPERIMENTS';
    var state = Experiments(null, action);

    var action = {};
    action.hypothesis = 'something';
    action.type = 'SET_HYPOTHESIS';
    action.expId = 'a';
    var state = Experiments(state, action);
    expect(state.getIn(['a', 'name'])).to.eql('paper chaser scale');
    expect(state.getIn(['a', 'hypothesis'])).to.eql('something');
  });

  it('should set cause', function () {
    var action = {};
    action.experiments = {
      a: {
        name : 'paper chaser scale'
      }
    };
    action.type = 'SET_EXPERIMENTS';
    var state = Experiments(null, action);

    var action = {};
    action.cause = 'gravity';
    action.type = 'SET_CAUSE';
    action.expId = 'a';
    var state = Experiments(state, action);
    expect(state.getIn(['a', 'name'])).to.eql('paper chaser scale');
    expect(state.getIn(['a', 'cause'])).to.eql('gravity');
  });

  it('should set effect', function () {
    var action = {};
    action.experiments = {
      a: {
        name : 'paper chaser scale'
      }
    };
    action.type = 'SET_EXPERIMENTS';
    var state = Experiments(null, action);

    var action = {};
    action.effect = 'falling';
    action.type = 'SET_EFFECT';
    action.expId = 'a';
    var state = Experiments(state, action);
    expect(state.getIn(['a', 'name'])).to.eql('paper chaser scale');
    expect(state.getIn(['a', 'effect'])).to.eql('falling');
  });

  it('should add dependent variables', function () {
    var action = {};
    action.experiments = {
      a: {
        name : 'paper chaser scale',
        depVars: new Immutable.List(),
        indVars: new Immutable.List(),
      }
    };
    action.type = 'SET_EXPERIMENTS';
    var state = Experiments(null, action);
    expect(state.getIn(['a', 'depVars']).size).to.eql(0);

    var action = {};
    action.depVarId = '1';
    action.expId = 'a';
    action.type = 'ADD_DEP_VAR';
    var state = Experiments(state, action);
    expect(state.getIn(['a', 'depVars']).size).to.eql(1);
  });

  it('should add independent variables', function () {
    var action = {};
    action.experiments = {
      a: {
        name : 'paper chaser scale',
        depVars: new Immutable.List(),
        indVars: new Immutable.List(),
      }
    };
    action.type = 'SET_EXPERIMENTS';
    var state = Experiments(null, action);
    expect(state.getIn(['a', 'indVars']).size).to.eql(0);

    var action = {};
    action.indVarId = '1';
    action.expId = 'a';
    action.type = 'ADD_IND_VAR';
    var state = Experiments(state, action);
    expect(state.getIn(['a', 'indVars']).size).to.eql(1);
  });
});
