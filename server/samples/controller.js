'use strict';

// var Exp = require('../exps/model');
var Sample = require('../exps/models/Sample');
var Measure = require('../exps/models/Measure');


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
      measureSample.value = body.measures[measureId].value;
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
          res.send(savedSamples);
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
