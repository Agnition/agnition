var config = require('./config.js');
var User = require('./users/model.js');
module.exports = function(req, res, next) {
  if (!req.user && process.env.ENV === undefined) {
    User.findOne({googleId : 'sampleGoogleId'}, function(err, user) {
      if (err) {
        throw err;
      }
      else {
        req.user = user;
        next();
      }
    });
  }
};
