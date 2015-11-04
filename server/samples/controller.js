var Sample = require('../exps/models/Sample');
var Measure = require('../exps/models/Measure');
var Exp = require('../exps/controller');
var utils = require('../utils');


var getSample = function (req, res) {
  Sample.findOne({_id : req.params.sample_id}, function(err, sample) {
    if (err) {
      return res.send(err);
    }
    res.send(sample);
  });
};

var addSample = function (req, res) {
  var body = req.body;
  var indVars = [];
  for (var key in body.indVars) {
    indVars.push({
      indVar: key,
      value: body.indVars[key].value
    });
  }
  var measureIds = Object.keys(body.measures);
  Measure.find({_id : {$in : measureIds}}, function(err, measures) {
    if (err) {
      res.send(err);
      return;
    }
    for (var i = 0; i < measures.length; i++) {
      var measureSample = {};
      measureSample.indVarStates = indVars;
      var measureId = measures[i]._id;
      //this just converts to number if possible, to perserve schema mixed type.
      measureSample.value = utils.ensureIsNumber(body.measures[measureId].value);
      measureSample.valid = body.valid;
      var sample = new Sample(measureSample);
      var index = i;
      var savedSamples = [];
      var errs = [];
      sample.save(function(err, s) {
        if (err) {
          errs.push(err);
        }
        measures[index].samples = measures[index].samples || [];
        measures[index].samples.push(s._id);
        measures[index].save();
        savedSamples.push(s);
        if (savedSamples.length === measures.length) {
          if (errs.length !== 0) {
            return res.send(errs);
          }
          Exp.updateExpStatus(body.expId, body.indVarId, body.depVarId, function(err, active) {
            if (err) {
              res.sendStatus(400);
            } else {
              res.send({
                samples: savedSamples,
                active: active
              });
            }
          });
        }
      });
    }
  });
};

var deleteSample = function (req, res) {
  Sample.findOne({_id : req.params.sample_id}).remove(function() {
    res.send(200);
  });
};


module.exports.getSample = getSample;
// module.exports.getAllSamples = getAllSamples;
module.exports.addSample = addSample;
module.exports.deleteSample = deleteSample;
