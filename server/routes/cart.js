const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
const { authMiddleware } = require('../controller/productController'); // Assuming authMiddleware is exported from productController

// Add to Cart
router.post('/add-to-cart/:productId', authMiddleware, cartController.addToCart);

// Get Cart
router.get('/cart', authMiddleware, cartController.getCart);

module.exports = router;
