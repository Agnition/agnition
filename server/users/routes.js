var express = require('express');
var router = express.Router();
var controller = require('./controller');
var expRouter = require('../exps/routes.js');

router.post('/', controller.addUser);

router.get('/:user_id', controller.getUser);
router.delete('/:user_id', controller.deleteUser);

router.use('/:user_id/experiments', expRouter);

module.exports = router;
