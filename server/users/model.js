var mongoose = require('mongoose');

// declare schema
var userSchema = new mongoose.Schema({
  username : String
});

// export model
module.exports = mongoose.model('User', userSchema);