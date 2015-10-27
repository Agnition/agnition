var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var deepPopulate = require('mongoose-deep-populate')(mongoose);

// declare schema
var userSchema = new mongoose.Schema({
  username : String,
  googleId : String,
  exps : [{ type: mongoose.Schema.ObjectId, ref: 'Exp' }]
});

//need to include plugin after schema...
userSchema.plugin(deepPopulate);

// export model
module.exports = mongoose.model('User', userSchema);
