require('dotenv').config()
const app =  require('./app')
const server = require('http').Server(app);
server.listen(process.env.PORT)