var mocha = require('mocha');
var expect = require('chai').expect;

var Immutable = require('immutable');

var Measures = require('../../../server/client/reducers/Measures');

describe('Measures Reducer', function(){
  it('should create an immutable map from an object', function () {
    var action = {};
    action.measures = {
      a: {
        kind : 'qualitative',
      },
      b: {
        kind : 'list',
      }
    };
    action.type = 'SET_MEASURES';
    var state = Measures(null, action);
    expect(state.getIn(['a', 'kind'])).to.eql('qualitative');
  });

  it('should create a new measure', function () {
    var action = {};
    action.measures = {
      a: {
        kind: 'list'
      }
    };
    action.type = 'SET_MEASURES';
    var state = Measures(null, action);

    var action = {};
    action.measureId = 'b';
    action.type = 'CREATE_MEASURE';
    state = Measures(state, action);

    expect(state.get('b')).to.not.eql(undefined);
  });

  it('should set kind', function () {
    var action = {};
    action.measures = {
      a: {
        kind: 'list'
      }
    };
    action.type = 'SET_MEASURES';
    var state = Measures(null, action);

    var action = {};
    action.kind = 'qualitative';
    action.type = 'SET_KIND';
    action.measureId = 'a';
    var state = Measures(state, action);
    expect(state.getIn(['a', 'kind'])).to.eql('qualitative');
  });

  it('should set unit', function () {
    var action = {};
    action.measures = {
      a: {
        kind: 'list'
      }
    };
    action.type = 'SET_MEASURES';
    var state = Measures(null, action);

    var action = {};
    action.unit = 'something';
    action.type = 'SET_UNIT';
    action.measureId = 'a';
    var state = Measures(state, action);
    expect(state.getIn(['a', 'unit'])).to.eql('something');
  });

  it('should set scale', function () {
    var action = {};
    action.measures = {
      a: {
        kind: 'list'
      }
    };
    action.type = 'SET_MEASURES';
    var state = Measures(null, action);

    var action = {};
    action.scale = 5;
    action.type = 'SET_SCALE';
    action.measureId = 'a';
    var state = Measures(state, action);
    expect(state.getIn(['a', 'scale'])).to.eql(5);
  });

  it('should add items to list', function () {
    var action = {};
    action.measures = {
      a: {
        kind: 'list',
        list: [],
      }
    };
    action.type = 'SET_MEASURES';
    var state = Measures(null, action);
    expect(state.getIn(['a', 'list']).size).to.eql(0);

    var action = {};
    action.item = 'hello';
    action.measureId = 'a';
    action.type = 'ADD_LIST_ITEM';
    var state = Measures(state, action);
    expect(state.getIn(['a', 'list']).size).to.eql(1);
  });

  it('should remove items from list', function () {
    var action = {};
    action.measures = {
      a: {
        kind: 'list',
        list: ['hi', 'world'],
      }
    };
    action.type = 'SET_MEASURES';
    var state = Measures(null, action);
    expect(state.getIn(['a', 'list']).size).to.eql(2);

    var action = {};
    action.item = 'world';
    action.measureId = 'a';
    action.type = 'REMOVE_LIST_ITEM';
    var state = Measures(state, action);
    expect(state.getIn(['a', 'list']).size).to.eql(1);
  });

  it('should set Measure Names', function () {
    var action = {};
    action.measures = {
      a: {
        kind: 'list',
        list: ['hi', 'world'],
        name: null
      }
    };
    action.type = 'SET_MEASURES';
    var state = Measures(null, action);
    expect(state.getIn(['a', 'name'])).to.eql(null);

    var action = {};
    action.name = 'porcupines';
    action.measureId = 'a';
    action.type = 'SET_MEASURE_NAME';
    var state = Measures(state, action);
    expect(state.getIn(['a', 'name'])).to.eql('porcupines');
  });
});
