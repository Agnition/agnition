'use strict';

var expController = require('../../../server/exps/controller.js');
var expect = require('chai').expect;
var sinon = require('sinon');
var mongoose = require('mongoose');

describe('Controller', function () {
  var example;
  beforeEach(function() {
    example = {
      name : 'Paper chaser',
      hypothesis : '5g is the best weight for planes',
      kind : 'ad_hoc',
      depVar: {
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
      indVars : [{
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
  describe('expKindValidator', function() {
    it('should check experiment kind for valid input', function () {
      example.kind = 'pokemon';
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
    });
  });
  describe('mesKindValidator', function() {
    it('should check measure kind for valid input', function () {
      example.depVar.measures[0].kind = 'pokemen';
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
    });
  });
  describe('mesScaleValidator', function() {
    it('should check measure scale for valid input', function () {
      example.depVar.measures[0].kind = 'numeric';
      example.depVar.measures[0].scale = [];
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
      example.depVar.measures[0].kind = 'list';
      example.depVar.measures[0].scale = [];
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
    });
  });
  describe('mesListValidator', function() {
    it('should check measure list for valid input', function () {
      example.depVar.measures[0].kind = 'numeric';
      example.depVar.measures[0].list = [];
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
      example.depVar.measures[0].kind = 'qualitative';
      example.depVar.measures[0].list = [];
      var exp = new Exp(example);
      expect(exp.validateSync()).to.not.eql(undefined);
    });
  });
});
