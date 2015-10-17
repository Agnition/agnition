'use strict';

var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../../server/index.js');
var sinon = require('sinon');

describe('The Experiment Router', function () {
  var exampleExp = require('./exampleExp.js');
  var exampleUser = require('../../../server/users/example.js');
  var userId;
  
  beforeEach(function(done){
    request(app)
      .post('/users/')
      .send(exampleUser)
      .end(function(err, res) {
        userId = res.body._id;
        done();
      });
  });

  afterEach(function(done){
    request(app)
      .delete('/users/'+userId)
      .end(function(err, res) {
        done();
      });
  });

  it('responds to POST requests at `/users/:userId/experiments/`', function (done) {
    request(app)
      .post('/users/'+userId+'/experiments/')
      .send(exampleExp)
      .expect(200)
      .expect(function(res){
        if(res.body.name === exampleExp.name) {
          return done();
        }
      })
      .end(function (err, res) {
        if (err) return done(err);
      });
  });

  it('responds to GET requests at `/users/:userId/experiments/`', function (done) {
    request(app)
      .get('/users/'+userId+'/experiments/')
      .expect(200)
      .expect(function(res){

        if(Array.isArray(res.body)){
          return done();
        }
      })
      .end(function (err, res) {
        if (err) return done(err);
      });

  });

  it('returns previously created experiments on GET requests at `/users/:userId/experiments/`', function (done) {
    request(app)
      .post('/users/'+userId+'/experiments/')
      .send(exampleExp)
      .end(function(err, res){
        request(app)
          .get('/users/'+userId+'/experiments/')
          .expect(200)
          .expect(function(res){
            if(res.body.length === 1){
              return done();
            } else {
              throw 'No experiments';
            }
          })
          .end(function (err, res) {
            if (err) return done(err);
          });
      });

  });

  it('responds to DELETE requests at `/users/:userId/experiments/:expId`', function (done) {
    var expId;

    request(app)
      .post('/users/'+userId+'/experiments/')
      .send(exampleExp)
      .end(function(err, res) {
        expId = res.body._id;
        request(app)
          .delete('/users/'+userId+'/experiments/'+expId)
          .expect(200, 'removed exp', done);
      });
  });

  it('responds to GET requests at `/users/:userId/experiments/:expId`', function (done) {
    var expId;

    request(app)
      .post('/users/'+userId+'/experiments/')
      .send(exampleExp)
      .end(function(err, res) {
        expId = res.body._id;
        request(app)
          .get('/users/'+userId+'/experiments/'+expId)
          .expect(200)
          .expect(function(res){
            if(res.body.name === exampleExp.name) {
              return done();
            }
          })
          .end(function (err, res) {
            if (err) return done(err);
          });
      });

  });

});