var testUtils = require('../../server/client/utils/componentUtils.js');
var Immutable = require('immutable');
var mockStore = require('../utils/mockStore');

var expect = require('chai').expect;

describe('mapIdsToObjs', function () {
  var imObj, idArray;
  beforeEach(function(){
    var obj = {
      a : {b:'c'},
      b : {c:'d'}
    };
    imObj = Immutable.fromJS(obj);
    idArray = ['a','b'];

  });
  it('should return a set of objects based on id inputs', function () {
    var result = testUtils.mapIdsToObjs(idArray,imObj);
    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('object');
    expect(result[0]).to.be.an('object');
  });
});

describe('divCollection(subElementobjects, subElementConstructor, propKey)', function () {
  xit('should properly output the divCollection', function () {
    //this is pending need to have larger conversation about this utility function
  });


});

describe('getSamplesForMeasure', function () {
  it('should get samples for a measure and indvar pair', function () {
    var obj = {
      Measures : {
        m1 : {
          kind : 'list',
          samples : ['s1', 's2']
        }
      },
      Samples : {
        s1 : {
          value : 'worked',
          indVarStates : [
            {
              _id : 'iv1',
              name : 'weight',
              value : '1a'
            }
          ]
        },
        s2 : {
          value : 'didn\'t work',
          indVarStates : [
            {
              _id : 'iv1',
              name : 'weight',
              value : '1b'
            }
          ]
        }
      },
      IndVars : {
        iv1 : {
          name : 'weight',
          options: ['1a','2a'],
          numTrials : 4,
          actionsPerTrial : 1
        },
      },
    };
    var state = mockStore(obj).getState();
    var indVarId = 'iv1';
    var measureId = 'm1';

    expect(JSON.stringify(testUtils.getSamplesForMeasure(state, measureId, indVarId)))
      .to.eql('{"indVarName":"weight","measureKind":"list","samples":[{"indVarValue":"1a","measureValue":"worked"},{"indVarValue":"1b","measureValue":"didn\'t work"}]}');
  });
});
