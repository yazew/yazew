const express = require('express')
const config = require('dotenv').config().parsed
const api = require('./api')
const webapp = require('./webapp')
const server = express()
server.use('/api/',api)
server.use('/',webapp)
const PORT = config.PORT || 5000
server.listen(PORT, () => {
  console.log(`Server started to listen to PORT : ${PORT}`)
})