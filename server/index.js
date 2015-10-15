// core modules and config
var path = require('path');
var config = require('./config');

// express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userRouter = require('./users/routes');
var expRouter = require('./exps/routes');

// db
var mongoose = require('mongoose');
mongoose.connect(config.dbPath);


// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(express.static(path.join(__dirname,'/public')));
app.use('/users', userRouter);
app.use('/exps', expRouter);



// start it up
app.listen(config.port);
console.log('agnition is listening on port ' + config.port + " " + process.env.ENV);