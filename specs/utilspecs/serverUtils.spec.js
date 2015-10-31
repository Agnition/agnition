var utils = require('../../server/utils');
var expect = require('chai').expect;
var _ = require('underscore');

describe('ensureIsNumber(value)', function () {

  it('should convert things to numbers when possible', function () {
    expect(utils.ensureIsNumber('10')).to.eql(10);
    expect(utils.ensureIsNumber('')).to.eql(0);
  });

  it('should convert things to numbers when possible', function () {
    expect(utils.ensureIsNumber('sandwhich')).to.eql('sandwhich');
  });

});

