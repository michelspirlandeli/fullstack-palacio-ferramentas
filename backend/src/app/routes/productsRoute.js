const restify = require('restify');
const Router             = require('restify-router').Router;
const productsController = require('../controllers/productsController');

const router = new Router();

router.get('/products', productsController.get);
router.get('/products/admin/:id', productsController.getById);
router.post('/products', productsController.post);
router.put('/products/:id', productsController.put);
router.del('/products/:id', productsController.remover);

module.exports = router;

