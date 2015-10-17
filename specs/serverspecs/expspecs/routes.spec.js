'use strict';
/*jshint undef:false, unused: false*/ 

var request = require('supertest');
var expect = require('chai').expect;
var sinon = require('sinon');
var Exp = require('../../../server/exps/model');
var app;

describe('The Experiment Router', function () {
  var exampleExp = require('./exampleExp.js');
  var exampleUser = require('../../../server/users/example.js');
  var userId;
  var expId;
  
  beforeEach(function(done){
    app = require('../../../server/index.js');
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
        // app.close(done);
      });

  });

  describe('/users/:userId/experiments/', function () {
    it('responds to POST requests', function (done) {
      request(app)
        .post('/users/' + userId + '/experiments/')
        .send(exampleExp)
        .expect(200)
        .expect(function(res){
          if(res.body.name === exampleExp.name) {
            return done();
          }
        })
        .end(function (err, res) {
          if (err) { return done(err); }
        });
    });

    it('responds to GET requests', function (done) {
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
    it('returns previously created experiments on GET', function (done) {
      request(app)
        //create new exp
        .post('/users/' + userId + '/experiments/')
        .send(exampleExp)
        .end(function(err, res) {
          //get id from created exp
          var expId = res.body._id;
          request(app)
            //get exps
            .get('/users/' + userId + '/experiments/')
            .expect(200)
            .expect(function(res){
              //ensure that id from above matches, and only one is created
              if(res.body[0]._id === expId && res.body.length === 1){
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
    
    it('should tell us when we post to a user that doesnt exist', function (done) {
     //post to fake user
     request(app)
     .post('/users/1/experiments/')
     .send(exampleExp)
     .expect(204, done);
    });

  });

  describe('/users/:userId/experiments/:expId', function () {
    it('responds to DELETE requests at', function (done) {
    
      request(app)
        .post('/users/' + userId + '/experiments/')
        .send(exampleExp)
        .end(function(err, res) {
          expId = res.body._id;
          request(app)
            .delete('/users/' + userId + '/experiments/' + expId)
            .expect(200, 'removed exp', done);
        });

    });
    it('actually deletes Exp document from DB', function(done){
      Exp.findOne({_id : expId}, function (err, exp) {
        expect(exp).to.eql(null);
        done();
      });

    });
  
    it('responds to GET requests at `/users/:userId/experiments/:expId`', function (done) {
      request(app)
        .post('/users/' + userId + '/experiments/')
        .send(exampleExp)
        .end(function(err, res) {
          expId = res.body._id;
          request(app)
            .get('/users/' + userId + '/experiments/'+ expId)
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

    it('should tell us when the exp dosent exist', function (done) {
     //ask for fake exp
     request(app)
     .get('/users/'+ userId + '/experiments/1')
     .expect(204, done);
    });
  });
  

});

  // 204 No Content
  // 400 Bad Request
  // 406 Not Acceptable


