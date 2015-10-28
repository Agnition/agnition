// var request = require('supertest');
var expect = require('chai').expect;
var sinon = require('sinon');
var Exp = require('../../../server/exps/models/Exp');
var app = require('../../../server/app.js');
var request = require('supertest')(app);
var exampleUser = require('../../../dummyData/exampleUsers.json')[0];
var dummyData = require('../../../dummyData/normalizedDummyData.json');
var mongoose = require('mongoose');

describe('The Experiment Router', function () {
  var userId, expId, dummyExp;

  beforeEach(function(done){
    //setup dummy exp
    var keys = Object.keys(dummyData.experiments);
    dummyExp = dummyData['experiments'][keys[0]];
    dummyExp._id = mongoose.Types.ObjectId();

    //have to set up the user.
    request
      .post('/users/')
      .send(exampleUser)
      .end(function(err, res) {
        userId = res.body.googleId;
        done();
      });
    });

    afterEach(function(done){
      //remove dummy exp
      request
        .delete('/' + userId + '/experiments'+ dummyExp._id)
        .end(function(err, res) {
          request
          //remove dummy user
          .delete('/users/' + userId)
          .end(function(err) {
            done(err);});
        });
    });



  describe('/users/:userId/experiments/', function () {
    it('adds an exp on post', function (done) {
      request
        .post('/users/'+userId+'/experiments/')
        .send({experiments : [dummyExp]})
        .expect(200)
        .end(function (err, res) {
          if (err) { return done(err); }
          else return done();
        });
    });

    it('returns all experiments on get', function (done) {
      request
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
      request
        //create new exp
        .post('/users/' + userId + '/experiments/')
        .send({experiments : [dummyExp]})
        .end(function(err, res) {
          request
            //get exps
            .get('/users/' + userId + '/experiments/'+ dummyExp._id)
            .expect(200)
            .expect(function(res){
              //ensure that id from above matches
              if(res.body._id === dummyExp._id){
                return done();
              } else {
                throw 'No experiments';
              }
            })
            .end(function (err, res) {
              done(err);
          });
        });
      });
    });

  describe('/users/:userId/experiments/:expId', function () {
    it('responds to DELETE requests at', function (done) {
    
      request
        .post('/users/' + userId + '/experiments/')
        .send({experiments : [dummyExp]})
        .end(function(err, res) {
          request
            .delete('/users/' + userId + '/experiments/' + dummyExp._id)
            .expect(200, 'removed exp', done);
        });

    });
    it('actually deletes Exp document from DB', function(done){
      Exp.findOne({_id : dummyExp._id}, function (err, exp) {
        expect(exp).to.eql(null);
        done();
      });

    });
  
    it('responds to GET requests at `/users/:userId/experiments/:expId`', function (done) {
      request
        .post('/users/' + userId + '/experiments/')
        .send({experiments : [dummyExp]})
        .end(function(err, res) {
          request
            .get('/users/' + userId + '/experiments/'+ dummyExp._id)
            .expect(200)
            .expect(function(res){
              if(res.body.name === dummyExp.name) {
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
     request
     .get('/users/'+ userId + '/experiments/'+mongoose.Types.ObjectId())
     .expect(204, done);
    });
  });
});


    // request
    //   .post('/users/')
    //   .send(exampleUser)
    //   .end(function(err, res) {
    //     userId = res.body.googleId;
    //     done();
    //   });

