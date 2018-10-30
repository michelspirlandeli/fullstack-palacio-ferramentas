const restify = require('restify')

const server = restify.createServer()

server.get('/', (req, res) => {
  res.send('Servidor criado com resposta para o path /.')
})

server.listen(3000, () =>{
    console.log('Servidor http://localhost:3000')
    console.log('Para derrubar o servidor: ctrl + c')
})