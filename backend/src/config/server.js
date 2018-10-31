const restify = require('restify')
const productRouter = require('../app/controllers/products-controller')

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send('Servidor criado com resposta para o path /.')
})

productRouter.applyRoutes(server);

server.listen(3000, () =>{
    console.log('Servidor http://localhost:3000')
    console.log('Para derrubar o servidor: ctrl + c')
})

