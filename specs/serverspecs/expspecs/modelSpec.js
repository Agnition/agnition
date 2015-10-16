'use strict';

var Exp = require('../../../server/exps/model');
var expect = require('chai').expect;
var _ = require('underscore');
var expObj = require('./exampleExp');

describe('Experiment Model', function () {
  var example;
  beforeEach(function() {
    example = _.extend({}, expObj);
  });

  it('should have the right keys', function () {
    var exp = new Exp(example);
    var keys = Object.keys(exp._doc);
    expect(keys).to.deep.eql(['dependentVars',
                              'independentVars',
                              '_id',
                              'kind',
                              'hypothesis',
                              'name']);
  });

  it('should validate experiment.kind', function () {
    example.kind = 'pokemon';
    var exp = new Exp(example);
    var error = exp.validateSync().toString();
    expect(error).to.eql('ValidationError: Validator failed for path `kind` with value `pokemon`');
  });

  it('should validate measure.kind', function () {
    example.dependentVars[0].measures[0].kind = 'cow';
    example.dependentVars[0].measures[0].unit = null;
    var exp = new Exp(example);
    var error = exp.validateSync().toString();
    expect(error).to.eql('ValidationError: Validator failed for path `kind` with value `cow`');
  });
  
  it('should validate measure.scale', function () {
    //POSITIVE CASE -- lets in good input
    //if kind = scale, scale should be valid, list should be null, unit should be null
    example.dependentVars[0].measures[0].kind  = 'qualitative';
    example.dependentVars[0].measures[0].scale = [0];
    example.dependentVars[0].measures[0].list  = null;
    example.dependentVars[0].measures[0].unit  = null;
    var exp = new Exp(example);
    var error = exp.validateSync();
    expect(error).to.eql(undefined);
    

    //NEGATIVE CASE -- Stops garbage
    //if kind = list, scale should be null, list should be valid, unit should be null
    example.dependentVars[0].measures[0].kind  = 'list';
    example.dependentVars[0].measures[0].scale = [1];
    example.dependentVars[0].measures[0].list  = [2];
    example.dependentVars[0].measures[0].unit  = null;
    exp = new Exp(example);
    error = exp.validateSync().toString();
    expect(error).to.eql('ValidationError: Validator failed for path `scale` with value `1`');
    
    //if kind = numeric, scale should be null, list should be null, unit should be valid
    example.dependentVars[0].measures[0].kind  = 'numeric';
    example.dependentVars[0].measures[0].scale = [3];
    example.dependentVars[0].measures[0].list  = null;
    example.dependentVars[0].measures[0].unit  = 'foot';
    exp = new Exp(example);
    error = exp.validateSync().toString();
    expect(error).to.eql('ValidationError: Validator failed for path `scale` with value `3`');
  });

  it('should validate measure.list', function () {
    //POSITIVE CASE -- lets in good input
    //if kind = list, scale should be null, list should be valid, unit should be null
    example.dependentVars[0].measures[0].kind  = 'list';
    example.dependentVars[0].measures[0].scale = null;
    example.dependentVars[0].measures[0].list  = [0];
    example.dependentVars[0].measures[0].unit  = null;
    var exp = new Exp(example);
    var error = exp.validateSync();
    expect(error).to.eql(undefined);
    

    //NEGATIVE CASE -- Stops garbage
    //if kind = scale, scale should be valid, list should be null, unit should be null
    example.dependentVars[0].measures[0].kind  = 'qualitative';
    example.dependentVars[0].measures[0].scale = [1];
    example.dependentVars[0].measures[0].list  = [2];
    example.dependentVars[0].measures[0].unit  = null;
    exp = new Exp(example);
    error = exp.validateSync().toString();
    expect(error).to.eql('ValidationError: Validator failed for path `list` with value `2`');
    
    //if kind = numeric, scale should be null, list should be null, unit should be valid
    example.dependentVars[0].measures[0].kind  = 'numeric';
    example.dependentVars[0].measures[0].scale = null;
    example.dependentVars[0].measures[0].list  = [3];
    example.dependentVars[0].measures[0].unit  = 'foot';
    exp = new Exp(example);
    error = exp.validateSync().toString();
    expect(error).to.eql('ValidationError: Validator failed for path `list` with value `3`');
  });

  it('should validate measure.unit', function () {
    //POSITIVE CASE -- lets in good input
    //if kind = numeric, scale should be null, list should be null, unit should be valid
    example.dependentVars[0].measures[0].kind  = 'numeric';
    example.dependentVars[0].measures[0].scale = null;
    example.dependentVars[0].measures[0].list  = null;
    example.dependentVars[0].measures[0].unit  = 'foot';
    var exp = new Exp(example);
    var error = exp.validateSync();
    expect(error).to.eql(undefined);
    

    //NEGATIVE CASE -- Stops garbage
    //if kind = scale, scale should be valid, list should be null, unit should be null
    example.dependentVars[0].measures[0].kind  = 'qualitative';
    example.dependentVars[0].measures[0].scale = [1];
    example.dependentVars[0].measures[0].list  = null;
    example.dependentVars[0].measures[0].unit  = 'foot';
    exp = new Exp(example);
    error = exp.validateSync().toString();
    expect(error).to.eql('ValidationError: Validator failed for path `unit` with value `foot`');
    
    //if kind = list, scale should be null, list should be null, unit should be null
    example.dependentVars[0].measures[0].kind  = 'list';
    example.dependentVars[0].measures[0].scale = null;
    example.dependentVars[0].measures[0].list  = [3];
    example.dependentVars[0].measures[0].unit  = 'pokemon';
    exp = new Exp(example);
    error = exp.validateSync().toString();
    expect(error).to.eql('ValidationError: Validator failed for path `unit` with value `pokemon`');
  });


});