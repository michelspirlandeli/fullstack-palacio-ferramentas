const restify = require('restify');
const Router         = require('restify-router').Router;
const userController = require('../controllers/userController');

const router = new Router();

router.get('/users', userController.get);
router.get('/users/admin/:id', userController.getById);
/*router.post('/users', userController.post);
router.put('/users/:id', userController.put);*/
router.del('/users/:id', userController.remover);

module.exports = router;