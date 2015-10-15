var express = require('express');
var router = express.router();
var controller = require('./controller');

router.post('/', controller.addUser);

router.get('/:id', controller.getUser);
router.delete('/:id', controller.deleteUser);