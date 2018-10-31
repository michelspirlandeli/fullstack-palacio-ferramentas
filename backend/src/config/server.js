const restify = require('restify')
const Router        = require('restify-router').Router;
const productRouter = require('../app/controllers/products-controller')

const server = restify.createServer()

productRouter.applyRoutes(server);

server.get('/', (req, res) => {
  res.send('Servidor criado com resposta para o path /.')
})
