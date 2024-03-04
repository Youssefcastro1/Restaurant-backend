const express = require('express');
const productController = require('../Controllers/productcontroller');
const router = express.Router();

router.post('/createproduct',productController.createProduct);
router.get('/listproducts',productController.listproduct);

module.exports = router;