const corsMiddleware = require('restify-cors-middleware')

const cors = corsMiddleware({
  	preflightMaxAge: 86400,
  	origins        : ['*'],
  	allowHeaders   : ['*'],
  	exposeHeaders  : ['x-custom-header']
})

module.exports = cors


