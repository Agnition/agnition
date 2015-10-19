// core modules and config
var path = require('path');
var config = require('./config');

var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');

// express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userRouter = require('./users/routes');

//webpack
var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// db
var mongoose = require('mongoose');
mongoose.connect(config.dbPath);


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes

app.use(function(req, res) {
  res.sendFile(__dirname + '/client/public/index.html');
});
app.use(express.static(path.join(__dirname,'/public')));
app.use('/users', userRouter);
app.get('/', express.static(path.join(__dirname, '/index.html')));


// start it up
app.listen(config.port);
console.log('agnition is listening on port ' + config.port + " " + process.env.ENV);

module.exports = app;
