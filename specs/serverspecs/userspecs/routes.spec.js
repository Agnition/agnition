var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../../server/index.js');
var sinon = require('sinon');

describe('The User Router', function () {
  var exampleUser = require('../../../server/users/example.js');
  describe('/users/', function () {
    it('responds to POST', function (done) {
      request(app)
        .post('/users/')
        .send(exampleUser)
        .expect(200)
        .expect(function(res){
          if(res.body.username === exampleUser.username) {
            return done();
          }
        })
        .end(function (err, res) {
          if (err) { return done(err); }
        });
    });  
  });

  describe('/users/:ID', function () {
    it('responds to GET requests', function (done) {
      var userId, googleId;
      request(app)
        .post('/users/')
        .send(exampleUser)
        .end(function(err, res) {
          userId = res.body._id;
          googleId = res.body.googleId;
          request(app)
            .get('/users/'+ googleId)
            .end(function(err, res){
              expect(res.body).to.eql({ 
                _id: '5630343a54859083199f59bf',
                username: 'johnsmith', 
                googleId: 'aGoogleId', 
                __v: 0, 
                exps: [] });
              done(err);
            });
        });
    });

    it('responds to DELETE requests at `/users/:ID`', function (done) {
      var userId;
      request(app)
        .post('/users/')
        .send(exampleUser)
        .end(function(err, res) {
          userId = res.body._id;
          request(app)
            .delete('/users/'+userId)
            .expect(200, 'removed user', done);
        });
    });
  
  });

});
