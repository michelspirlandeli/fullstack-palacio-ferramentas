const restify = require('restify');
const Router             = require('restify-router').Router;
const database           = require('../../config/database/database');
const productsController = require('../controllers/products-controller');

router.get('/products', productsController.get);
router.get('/products/admin/:id', productsController.getById);
router.post('/products', productsController.post);
router.put('/products/:id', productsController.put);
router.delete('/products', productsController.delete);

module.exports = router;