'use strict';

var Exp = require('../../../server/exps/model');
var expect = require('chai').expect;
var sinon = require('sinon');
var mongoose = require('mongoose');

describe('Experiment Document', function () {
  var example;
  before(function() {
  });
  beforeEach(function() {
    example = {
      name : 'Paper chaser',
      hypothesis : '5g is the best weight for planes',
      kind : 'ad_hoc',
      dependentVar: {
        name : 'Flight length',
        measures : [{
          name : 'Distance',
          kind : 'numeric',
          scale : null,
          list : null,
          samples : [{
            value: 3.2
          },
          {
            value: 2.5
          }],
          request : {
            freq : null, 
            question : 'how far did it fly?'
          }
        }]
      }, 
      independentVars : [{
        name: 'Weight',
        actionStart : null,
        actionWarning : null, //should likely be some datetime thing....
        consecutiveActions : 1,
        options : ['3.4','6.0'],
        remind : {
          freq : null, // whatever datetime thing we decide on
          reminder: 'Put this amount of weight in your plane'
        }
      }]
    };
  });
  it('should have correct keys', function () {
    var exp = new Exp(example);
    var keys = Object.keys(exp._doc);
    var testKeys = ['name', 
                   'hypothesis', 
                   'kind', 
                   'dependentVar', 
                   'independentVars'];
    for (var i = 0; i < testKeys.length; i++) {
      expect(keys).to.contain(testKeys[i]);
    }
  });
  describe('expKindValidator', function() {
    it('should check experiment kind for valid input', function () {
      example.kind = 'pokemon';
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
    });
  });
  describe('mesKindValidator', function() {
    it('should check measure kind for valid input', function () {
      example.dependentVar.measures[0].kind = 'pokemen';
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
    });
  });
  describe('mesScaleValidator', function() {
    it('should check measure scale for valid input', function () {
      example.dependentVar.measures[0].kind = 'numeric';
      example.dependentVar.measures[0].scale = [];
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
      example.dependentVar.measures[0].kind = 'list';
      example.dependentVar.measures[0].scale = [];
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
    });
  });
  describe('mesListValidator', function() {
    it('should check measure list for valid input', function () {
      example.dependentVar.measures[0].kind = 'numeric';
      example.dependentVar.measures[0].list = [];
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
      example.dependentVar.measures[0].kind = 'qualitative';
      example.dependentVar.measures[0].list = [];
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
    });
  });
});
