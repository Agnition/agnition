'use strict';

var User = require('../../../server/users/model');
var expect = require('chai').expect;
var sinon = require('sinon');



describe('User Document', function () {

  it('should have a username and store it as a string', function () {
    //positive case
    var user = new User({username:"tinygoblin"});
    expect(user.username).to.be.a('string');

    //negative case
    user = new User({username: 1});
    expect(user.username).to.be.a('string');

  });
});
