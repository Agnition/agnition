'use strict';

var Exp = require('../exps/model');
var User = require('../users/model');

var getSample = function (req, res) {
  var userId = req.params.user_id;
  var expId = req.params.exp_id;
  var depVarId = req.params.dep_var_id;
  var measureId = req.params.measure_id;
  var sampleId = req.params.sample_id;
  Exp.findOne({_id : expId}, function(err, exp) {
    if (err) {
      return res.send(err);
    }
    if (exp === null) {
      return res.send('No experiment with that id found');
    }
    var depVar = exp.depVars.id(depVarId);
    if (depVar === undefined) {
      return res.send('Dependent var not found');
    }
    var measure = depVar.measures.id(measureId);
    res.send(measure.samples.id(sampleId));
  });
};

var getAllSamples = function (req, res) {
  // return res.send('hey');
  var userId = req.params.user_id;
  var expId = req.params.exp_id;
  var depVarId = req.params.dep_var_id;
  var measureId = req.params.measure_id;
  Exp.findOne({_id : expId}, function(err, exp) {
    if (err) {
      return res.send(err);
    }
    if (exp === null) {
      return res.send('No experiment with that id found');
    }
    var depVar = exp.depVars.id(depVarId);
    if (depVar === undefined) {
      return res.send('Dependent var not found');
    }
    var measure = depVar.measures.id(measureId);
    res.send(measure.samples);
  });
};

var addSample = function (req, res) {
  var userId = req.params.user_id;
  var expId = req.params.exp_id;
  var depVarId = req.params.dep_var_id;
  var measureId = req.params.measure_id;
  var newSample = req.body;
  Exp.findOne({_id : expId}, function(err, exp) {
    if (err) {
      return res.send(err);
    }
    if (exp === null) {
      return res.send('No experiment with that id found');
    }
    var depVar = exp.depVars.id(depVarId);
    if (depVar === undefined) {
      return res.send('Dependent var not found');
    }
    var measure = depVar.measures.id(measureId);
    if (measure === undefined) {
      return res.send('Measure not found');
    }
    measure.samples.push(newSample);
    exp.save(function(err) {
      if (err) {
        return res.send(err);
      }
      return res.send(measure.samples[measure.samples.length - 1]);
    });
  });
};

var deleteSample = function (req, res) {
  var userId = req.params.user_id;
  var expId = req.params.exp_id;
  var depVarId = req.params.dep_var_id;
  var measureId = req.params.measure_id;
  var sampleId = req.params.sample_id;
  Exp.findOne({_id : expId}, function(err, exp) {
    if (err) {
      return res.send(err);
    }
    if (exp === null) {
      return res.send('No experiment with that id found');
    }
    var depVar = exp.dependentVars.id(depVarId);
    if (depVar === undefined) {
      return res.send('Dependent var not found');
    }
    var measure = depVar.measures.id(measureId);
    if (measure === undefined) {
      return res.send('Measure not found');
    }
    var sample = measure.samples.id(sampleId);
    var index = measure.samples.indexOf(sample);
    measure.samples.splice(index, 1);
    exp.save(function(err) {
      if (err) {
        return res.send(err);
      }
      return res.send(exp);
    });
  });
};


module.exports.getSample = getSample;
module.exports.getAllSamples = getAllSamples;
module.exports.addSample = addSample;
module.exports.deleteSample = deleteSample;
