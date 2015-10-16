var mongoose = require('mongoose');

// declare schema
var userSchema = new mongoose.Schema({
  username : String,
  exps : [{ type: mongoose.Schema.ObjectId, ref: 'Exp' }]
});

// export model
module.exports = mongoose.model('User', userSchema);
