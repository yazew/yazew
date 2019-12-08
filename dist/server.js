"use strict";

var config = require('dotenv').config().parsed;

var express = require('express');

var PORT = process.env.PORT || 5000;

var api = require('./api');

var webapp = require('./webapp');

var server = express();
server.use('/api/', api);
server.use('/', webapp);
server.listen(PORT, function () {
  console.log("Server started to listen to PORT : ".concat(PORT));
});