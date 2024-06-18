const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.getAllProducts);
router.post('/', productController.authMiddleware, productController.upload.single('image'), productController.createProduct);
router.get('/:id', productController.authMiddleware, productController.getProductById);
router.put('/:id', productController.authMiddleware, productController.upload.single('image'), productController.updateProduct);
router.delete('/:id', productController.authMiddleware, productController.deleteProduct);

module.exports = router;