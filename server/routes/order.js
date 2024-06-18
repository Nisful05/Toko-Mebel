const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const { authMiddleware } = require('../controller/productController'); // Assuming authMiddleware is exported from productController

// Place Order
router.post('/place-order', authMiddleware, orderController.placeOrder);

// Get Orders
router.get('/orders', authMiddleware, orderController.getOrders);

module.exports = router;
