// data needs to be a normalized store object
var _ = require('lodash');
var testData = require('./testStoreData').entities;
var filterData = require('../../server/client/utils/normalDataFilter');
var mocha = require('mocha');
var expect = require('chai').expect;

var correctResult = {
  experiments: {
    "88152": {
      _id: "88152",
      depVars: [ '581056' ],
      indVars: [ 'VkprU1_Zx' ],
      name: 'My Experiment Test',
      hypothesis: 'test hyp',
      cause: 'causal cause',
      effect: 'effectual effect'
    }
  },
  depVars: {
    "581056": { _id: "581056", measures: ['519716', '609680'], name: 'depvarA' }
  },
  measures: {
    "519716": { _id: "519716", "list": [ "one", "two", "three" ], "kind": "list" },
    "609680": { _id: "609680", "list": [], "kind": "numeric", "unit": "meters" }
  },
  indVars: {
    'VkprU1_Zx': { _id: "VkprU1_Zx", options: [], actionsPerTrial: '1', numTrials: '10' }
  }
};

describe('Filter out a single experiment from state', function () {
  it('should return the correctly formatted data for a single experiment', function () {
    var result = filterData(testData, 'experiments', "88152");
    expect(result).to.eql(correctResult);
  });
});

