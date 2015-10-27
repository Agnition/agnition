'use strict';
/*jshint undef:false, unused: false*/ 

var request = require('supertest');
var expect = require('chai').expect;
var sinon = require('sinon');
var app = require('../../../server/app.js');
var Exp = require('../../../server/exps/model');

describe('The Experiment Router', function () {
  var exampleExp = require('./exampleExp.js');
  var exampleSample = require('./exampleSample.js');
  var exampleUser = require('../../../server/users/example.js');
  // mongoose.connect('mongodb://localhost/test');
  var userId;
  var expId;
  var depVarId;
  var measureId;
  var sampleId;
  var samples;
  var samplesFound;
  var samplesLength;

  beforeEach(function(done){
    Exp.findOne({}, function(err, exp) {
      expId = exp.id;
      depVarId = exp.depVars[0].id;
      measureId = exp.depVars[0].measures[0].id;
      sampleId = exp.depVars[0].measures[0].samples[0].id;
      done();
    });
  });

  afterEach(function(){
    // request(app)
      // .delete('/users/'+userId)
      // .end(function(err, res) {
        // done();
        // // app.close(done);
      // });

  });

  describe('samples route', function () {
    it('gets samples', function(done) {
      request(app)
        .get('/users/1/exps/'+expId+'/depVars/'+depVarId+'/measures/'+measureId+'/samples')
        .expect(200)
        .end(function(err, res) {
          expect(err).to.equal(null);
          var samples = res.body;
          expect(samples.length).to.above(0);
          samplesLength = samples.length;
          done();
        });
    });
    it('gets one sample', function(done) {
      request(app)
        .get('/users/1/exps/'+expId+'/depVars/'+depVarId+'/measures/'+measureId+'/samples/' + sampleId)
        .expect(200)
        .end(function(err, res) {
          expect(err).to.equal(null);
          var samples = res.body;
          expect(samples).to.not.equal(null);
          done()
        });
    });
    it('posts one sample', function(done) {
      request(app)
        .post('/users/1/exps/'+expId+'/depVars/'+depVarId+'/measures/'+measureId+'/samples/')
        .send({
          value : 3, indVarStates : {
            'aaaaaaaaaaaaaaaaaaaaaaaa' : 4
            }
          })
        .expect(200)
        .end(function(err, res) {
          expect(err).to.equal(null);
          var samples = res.body;
          
          expect(samples).to.not.equal(null);
          done()
        });
    });
    it('should have added samples', function(done) {
      request(app)
        .get('/users/1/exps/'+expId+'/depVars/'+depVarId+'/measures/'+measureId+'/samples')
        .expect(200)
        .end(function(err, res) {
          expect(err).to.equal(null);
          var samples = res.body;
          expect(samples.length).to.above(samplesLength);
          done();
        });
    });
  });

});

  // 204 No Content
  // 400 Bad Request
  // 406 Not Acceptable


