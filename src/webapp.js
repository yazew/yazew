const express = require('express')
const webapp = express()
const bodyParser = require('body-parser')
webapp.get('/',(req, res) => {
  res.status(200).json({
    message: 'Welcome to our webapp'
  })
})
module.exports= webapp