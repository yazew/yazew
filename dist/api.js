"use strict";

var express = require('express');

var api = express();

var bodyParser = require('body-parser');

api.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to our API'
  });
});
module.exports = api;