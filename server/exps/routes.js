var express = require('express');
var router = express.Router({mergeParams: true});
var controller = require('./controller');
var sampleRouter = require('../samples/routes.js');

router.post('/', controller.addExp);
router.get('/', controller.getAllExps);

router.get('/:exp_id', controller.getExp);
router.delete('/:exp_id', controller.deleteExp);

router.use('/:exp_id/depVars/:dep_var_id/measures/:measure_id/samples', sampleRouter);

module.exports = router;
