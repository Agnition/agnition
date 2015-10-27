var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

//validator
var expKindValidator = function (val) {
  return val === 'continuous' || val === 'ad_hoc';
};

//exp
var expSchema = new Schema ({
  _id : {type: mongoose.Schema.ObjectId},
  name : { type: String, required: true },
  hypothesis : { type: String },
  active: Boolean,
  kind : {
    type: String,
    required : true,
    validate : {
      validator: expKindValidator,
    }
  },
  depVars : [{ type: mongoose.Schema.ObjectId, ref: 'DepVar' }], //[depVarSchema],
  indVars : [{ type: mongoose.Schema.ObjectId, ref: 'IndVar' }] //[indVarSchema]
});


// export model
module.exports = mongoose.model('Exp', expSchema);
