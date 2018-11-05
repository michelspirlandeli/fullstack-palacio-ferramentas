const restify = require('restify')
const fornecedorRouter = require('../app/routes/fornecedorRoute')
const productRouter    = require('../app/routes/productsRoute')
const userRouter       = require('../app/routes/userRoute')
const cors             = require('../config/cors')

const server = restify.createServer()

server.pre(cors.preflight)
server.use(cors.actual)
server.pre(restify.plugins.pre.dedupeSlashes());
server.use(cors.actual);
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

fornecedorRouter.applyRoutes(server);
productRouter.applyRoutes(server);
userRouter.applyRoutes(server);

server.get('/', (req, res) => {
  res.send('Servidor criado com resposta para o path /.')
})


/*---- LISTENING ----*/

//localhost
/*server.listen(8080, () =>{
  console.log('Servidor http://localhost:8080')
  console.log('Para derrubar o servidor: ctrl + c')
})*/

//heroku
server.listen(process.env.PORT || 8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
