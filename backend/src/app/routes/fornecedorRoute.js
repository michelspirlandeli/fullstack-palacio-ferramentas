const restify = require('restify');
const Router               = require('restify-router').Router;
const fornecedorController = require('../controllers/fornecedorController');

const router = new Router();

router.get('/fornecedores', fornecedorController.get);
router.get('/fornecedores/admin/:id', fornecedorController.getById);
router.post('/fornecedores', fornecedorController.post);
router.put('/fornecedores/:id', fornecedorController.put);
router.del('/fornecedores/:id', fornecedorController.remover);

module.exports = router;

