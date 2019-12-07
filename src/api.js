const express = require('express')
const api = express()
const bodyParser = require('body-parser')
api.get('/',(req, res) => {
  res.status(200).json({
    message: 'Welcome to our API'
  })
})
module.exports= api