var app = require('./app.js');
var config = require('./config.js');

module.exports = app.listen(config.port);
