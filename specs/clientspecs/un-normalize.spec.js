var mocha = require('mocha');
var expect = require('chai').expect;
var unNormalize = require('../../server/client/utils/un-normalize.js');
var dummyNumeric = require('../../dummyData/numeric.js');
var normalize = require('../../server/client/utils/normalize.js');


describe('New Experiment Overview Test', function () {


  beforeEach(function () {
  });


  xit('should be the inverse of normalize', function () {
    var original = {exps : [dummyNumeric]};
    var normed = normalize(original);
    var unNormed = unNormalize(normed);
    expect(unNormed).to.eql(original);
  });
});
