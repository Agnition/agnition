'use strict';

var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../../server/index.js');
var sinon = require('sinon');

describe('The User Router', function () {

  beforeEach(function(){

  });

  afterEach(function(){

  });

  it('responds to POST requests at `/users/`', function (done) {
    var data = {
      username: 'johnsmith'
    };

    request(app)
      .post('/users/')
      .send(data)
      .expect(200)
      .expect(function(res){
        if(res.body.username === 'johnsmith') {
          return done();
        }
      })
      .end(function (err, res) {
        if (err) return done(err);
      });
  });

  it('responds to GET requests at `/users/:ID`', function (done) {
    var userId;

    var data = {
      username: 'johnsmith'
    };

    request(app)
      .post('/users/')
      .send(data)
      .end(function(err, res) {
        userId = res.body._id;
        request(app)
          .get('/users/'+userId)
          .expect(function(res){
            res.body.exps = '';
            res.body.__v = 0;
          })
          .expect(200, {
            __v: 0,
            _id: userId,
            username: 'johnsmith',
            exps: ''
          }, done);
      });
    
  });

  it('responds to DELETE requests at `/users/:ID`', function (done) {
    var userId;

    var data = {
      username: 'johnsmith'
    };

    request(app)
      .post('/users/')
      .send(data)
      .end(function(err, res) {
        userId = res.body._id;
        request(app)
          .delete('/users/'+userId)
          .expect(200, 'removed user', done);
      });
  });

});