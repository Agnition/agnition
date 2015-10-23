var Normalize = require('normalizr');
var Schema = Normalize.Schema;
var arrayOf = Normalize.arrayOf;

var EntitySchema = new Schema('schema').constructor;
var ArraySchema = arrayOf({}).constructor;
var schema = require('./schema.js');

function unNormalize(obj, schema) {
  var currentSub = {};
  function unNormalizeSub(result, entities, schema) {
    if (schema.constructor === ArraySchema) {
      var populated = [];
      for (var i = 0; i < result.length; i++) {
        populated.push(unNormalizeSub(result[i], entities, schema._itemSchema));
      }
      return populated;
    }
    if (schema.constructor === EntitySchema) {
      var entityKey = schema._key;
      var populated = entities[entityKey][result];
      for (var key in schema) {
        if (schema.hasOwnProperty(key) &&
          key !== '_key' &&
          key !== '_getId' &&
          entities.hasOwnProperty(key)) {
            populated[key] = unNormalizeSub(populated[key], entities, schema[key]);
          }
      }
      return populated;
    }
    for (var key in schema) {
      if (key === '_itemSchema') {
        return result;
      }
      currentSub[key] = unNormalizeSub(result[key], entities, schema[key]);
    }
    return currentSub;
  }
  var result = obj.result;
  var entities = obj.entities;
  return unNormalizeSub(result, entities, schema);
}

module.exports = function(data) {
  return unNormalize(JSON.parse(JSON.stringify(data)), schema);
};
