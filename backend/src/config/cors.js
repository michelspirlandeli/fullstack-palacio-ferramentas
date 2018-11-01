const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins        : [ ' http://localhost:8080 ' , ' http://localhost:3000 ' ],
  allowHeaders   : ['*'],
  exposeHeaders  : ['*']
})

module.exports = cors