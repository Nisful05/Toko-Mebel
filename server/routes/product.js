const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.authMiddleware, productController.getAllProducts);
router.post('/', productController.authMiddleware, productController.upload.single('image'), productController.createProduct);
router.get('/:id', productController.authMiddleware, productController.getProductById);
router.put('/:id', productController.authMiddleware, productController.upload.single('image'), productController.updateProduct);
router.delete('/:id', productController.authMiddleware, productController.checkRole(['Super Admin']), productController.deleteProduct);

module.exports = router;