var express = require('express');
var router = express.Router({mergeParams: true});
var controller = require('./controller');

router.post('/', controller.addExp);
router.get('/', controller.getAllExps);

router.get('/:exp_id', controller.getExp);
router.delete('/:exp_id', controller.deleteExp);

module.exports = router;
