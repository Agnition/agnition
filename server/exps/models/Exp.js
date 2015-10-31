var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var Schema = mongoose.Schema;

//validator
var expKindValidator = function (val) {
  return val === 'continuous' || val === 'ad_hoc';
};

//exp
var expSchema = new Schema ({
  _id : {type: mongoose.Schema.ObjectId, default: mongoose.Types.ObjectId() },
  name : { type: String, required: true },
  hypothesis : { type: String },
  cause: { type: String},
  effect: { type: String },
  active: { type : Boolean, required: true},
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

//need to include plugin after schema...
expSchema.plugin(deepPopulate);


// export model
module.exports = mongoose.model('Exp', expSchema);


// { depVars: [Object],
//         indVars: [Object],
//         name: 'asdf',
//         hypothesis: 'asdfasdf',
//         cause: '',
//         effect: '' } },
