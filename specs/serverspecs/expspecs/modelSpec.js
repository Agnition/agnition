'use strict';

var Exp = require('../../../server/exps/model');
var expect = require('chai').expect;
var sinon = require('sinon');
var mongoose = require('mongoose');
var _ = require('underscore');

describe('Experiment Document', function () {
  var example;
  beforeEach(function() {
    example = require('./exampleExp');
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

  describe('validators', function () {
    it('should check experiment kind for valid input', function () {
      example.kind = 'pokemon';
      var exp = new Exp(example);
      var error = exp.validateSync().toString();
      expect(error).to.eql('ValidationError: Validator failed for path `kind` with value `pokemon`');
    });
    it('should check measure kind for valid input', function () {
      example.dependentVars[0].measures[0].kind = 'cow';
      var exp = new Exp(example);
      var error = exp.validateSync().toString();
      console.log("-------------------------------------------",error);
      expect(error).to.contain('Validator failed for path `kind` with value `pokemon`');
    });

  });


});

//   describe('expKindValidator', function() {
//   });

  // describe('mesKindValidator', function() {
  // });

//   describe('mesScaleValidator', function() {
//     it('should check measure scale for valid input', function () {
//       example.dependentVar.measures[0].kind = 'numeric';
//       example.dependentVar.measures[0].scale = [];
//       var exp = new Exp(example);
//       expect(exp.validateSync()).to.not.eql(undefined);
//       example.dependentVar.measures[0].kind = 'list';
//       example.dependentVar.measures[0].scale = [];
//       var exp = new Exp(example);
//       expect(exp.validateSync()).to.not.eql(undefined);
//     });
//   });

//   describe('mesListValidator', function() {
//     it('should check measure list for valid input', function () {
//       example.dependentVar.measures[0].kind = 'numeric';
//       example.dependentVar.measures[0].list = [];
//       var exp = new Exp(example);
//       expect(exp.validateSync()).to.not.eql(undefined);
//       example.dependentVar.measures[0].kind = 'qualitative';
//       example.dependentVar.measures[0].list = [];
//       var exp = new Exp(example);
//       expect(exp.validateSync()).to.not.eql(undefined);
//     });
//   });

//   describe('freqValidator', function() {
//     it('should error if freq is not a string', function () {
     
//     });
//   });
// });
