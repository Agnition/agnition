var express = require('express');
var passport = require('passport');
var util = require('util');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require('./users/model.js')

var GOOGLE_CLIENT_ID = '856288792446-meq4vh55g23locbvru0f6oj23n2hbvm0.apps.googleusercontent.com';
var GOOGLE_CLIENT_SECRET = '9SMPjAEi3MHIirClQrp2chSN';

module.exports = function(app) {
  passport.serializeUser(function(user, done) {
    User.findOne({username : user.username}, function(err, user) {
      if (user) {
        done(null, user.id);
      }
      else {
        if (err) {
          done(err, null);
          return;
        }
        done('not found', null);
      }
    });
  });

  passport.deserializeUser(function(obj, done) {

    User.findOne({_id: obj}, function(err, user) {
      if (err) {
        done(err, null);
      } 
      else {
        done(null, user);
      }
    });
  });


  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        var newUser = new User({
          username : profile.displayName
        });
        User.findOne(newUser, function(err, user) {
          if (err) {
            done(err, null);
          } 
          else if (user) {
            done(null, user);
          }
          else {
            newUser.save(function(err, user) {
              if (err) {
                done(err, null);
              }
              done(null, user);
            });
          }
        });
      });
    }
  ));

  app.use(passport.initialize());
  app.use(passport.session());

  // GoogleStrategy.prototype.userProfile = function(token, done) {
    // done(null, {});
  // };

  app.get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }),
    function(req, res) {
    });

  app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/');
    });

  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });

  // function ensureAuthenticated(req, res, next) {
    // if (req.isAuthenticated()) { return next(); }
    // res.redirect('/login');
  // }
};
