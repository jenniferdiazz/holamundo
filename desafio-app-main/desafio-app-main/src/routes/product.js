const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController'); 

router.get('/', productController.list);
router.post('/buscar', productController.buscar);


module.exports = router;