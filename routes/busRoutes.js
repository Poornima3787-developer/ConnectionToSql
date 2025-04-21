const express = require('express');
const busController = require('../controller/busController');
const router = express.Router();

router.post('/buses', busController.addBus);
router.get('/buses/available/:seats', busController.getAvailableBuses);

module.exports = router;