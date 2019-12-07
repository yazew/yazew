"use strict";

var express = require('express');

var webapp = express();

var bodyParser = require('body-parser');

webapp.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to our webapp'
  });
});
module.exports = webapp;