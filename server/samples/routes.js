var express = require('express');
var router = express.Router({mergeParams: true});
var controller = require('./controller');

router.post('/', controller.addSample);
// router.get('/', controller.getAllSamples);

router.get('/:sample_id', controller.getSample);
router.delete('/:sample_id', controller.deleteSample);

module.exports = router;
