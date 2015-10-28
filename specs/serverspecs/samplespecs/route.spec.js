// var request = require('supertest');
var expect = require('chai').expect;
var sinon = require('sinon');
var Sample = require('../../../server/exps/models/Sample');
var app = require('../../../server/app.js');
var request = require('supertest')(app);
// var exampleUser = require('../../../dummyData/exampleUsers.json')[0];
var dummyData = require('../../../dummyData/normalizedDummyData.json');
var dummySample = require('../../../dummyData/dummySamples.js');
var mongoose = require('mongoose');

describe('The Sample Router', function () {
  var sampleId, sampleValue, sampleLength;

  before(function(done) {
    Sample.findOne({}, function(err, sample) {
      sampleId = sample._id;
      sampleValue = sample.value;
      done();
    });
  });

  beforeEach(function(done){
    //setup dummy exp
    Sample.find({}, function(err, samples) {
      sampleLength = samples.length;
      sampleId = samples[0]._id;
      done();
    });
  });

  afterEach(function(done){
    done();
  });



  describe('/samples', function () {
    it('adds a sample on post', function (done) {
      request
        .post('/samples')
        .send(dummySample)
        .expect(200)
        .end(function (err, res) {
          if (err) { return done(err); }
          Sample.find({}, function(err, samples) {
            expect(samples.length).to.be.above(sampleLength);
            done();
          });
        });
    });
    it('finds a sample', function (done) {
      request
        .get('/samples/' + sampleId)
        .expect(200)
        .end(function (err, res) {
          if (err) { return done(err); }
          expect(res).to.be.an('object');
          expect(res.body.value).to.equal(sampleValue); 
          done();
        });
    });
    it('deletes a sample', function (done) {
      request
        .delete('/samples/' + sampleId)
        .expect(200)
        .end(function (err, res) {
          if (err) { return done(err); }
          Sample.find({}, function(err, samples) {
            expect(samples.length).to.be.below(sampleLength);
            done();
          });
        });
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

