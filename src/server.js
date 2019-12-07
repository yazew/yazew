const config = require('dotenv').config().parsed
const express = require('express')
const PORT = process.env.PORT || 5000
const api = require('./api')
const webapp = require('./webapp')
const server = express()
server.use('/api/',api)
server.use('/',webapp)
server.listen(PORT, () => {
  console.log(`Server started to listen to PORT : ${PORT}`)
})