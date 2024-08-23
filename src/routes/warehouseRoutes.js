const express = require('express')
const router = express.Router()
const WarehouseController = require('../controllers/warehouseController');

const warehouseController = new WarehouseController();

router.post('/optimize', warehouseController.optimize.bind(warehouseController));

module.exports = router
