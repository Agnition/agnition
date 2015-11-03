var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;
var sampleSchema = require('./Sample');
var requestSchema = require('./Request');

// validator functions
var mesKindValidator = function (val) {
  return val === 'qualitative' ||  val === 'list' || val === 'numeric';
};

var mesListValidator = function (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return ((this.kind !== 'list' && val === null) || (this.kind === 'list' &&  val instanceof Array));
};

var mesUnitValidator = function (val) {
  // what is this?
  // null values do not call validator functions.. so case is not considered
  return ((this.kind !== 'numeric' && val === null) || (this.kind === 'numeric' &&  typeof val === 'string'));
};


// mesuare schema
var measureSchema = new Schema({
  _id : {type: mongoose.Schema.ObjectId},
  name: {type: String },
  kind : {
    type: String,
    required: true,
    validate: {
      validator : mesKindValidator
    }
  },
  scaleDescriptionMin: String,
  scaleDescriptionMiddle: String,
  scaleDescriptionMax: String,
  list : {
    type: Array,
    validate : {
     validator: mesListValidator
    }
  },
  unit : {
    type: String,
    validate : {
     validator: mesUnitValidator
    }
  },
  samples : [{ type: mongoose.Schema.ObjectId, ref: 'Sample' }],  // [sampleSchema],
  requests : [{ type: mongoose.Schema.ObjectId, ref: 'Request' }] // [requestSchema]
});

module.exports = mongoose.model('Measure', measureSchema);
