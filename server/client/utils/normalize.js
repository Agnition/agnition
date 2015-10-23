var Normalize = require('normalizr');
var normalize = Normalize.normalize;
var schema = require('./schema');

module.exports = function(data) {
  return normalize(data, schema);
};
