// 1. Import json-server
const jsonserver = require('json-server')

// 2. Create a server application using jsonserver
const docServer = jsonserver.create()

// 3. Setup path for db.json
const router = jsonserver.router('db.json')

// 4. Return middleware
const middleware = jsonserver.defaults()

// 5. Setup a port number
const port = 3001

// 6. Use in restServer
docServer.use(middleware)
docServer.use(router)

// 7. To run the server
docServer.listen(port,() =>{
    console.log('Doctor server listening on port' + port);
})