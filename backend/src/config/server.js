const restify = require('restify')
const fornecedorRouter = require('../app/routes/fornecedorRoute')
const productRouter    = require('../app/routes/productsRoute')
const userRouter       = require('../app/routes/userRoute')

const server = restify.createServer()

fornecedorRouter.applyRoutes(server);
productRouter.applyRoutes(server);
userRouter.applyRoutes(server);

server.get('/', (req, res) => {
  res.send('Servidor criado com resposta para o path /.')
})

server.listen(3000, () =>{
  console.log('Servidor http://localost:3000')
  console.log('Para derrubar o servidor: ctrl + c')
})
