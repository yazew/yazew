"use strict";

var express = require('express');

var config = require('dotenv').config().parsed;

var api = require('./api');

var webapp = require('./webapp');

var server = express();
server.use('/api/', api);
server.use('/', webapp);
var PORT = config.PORT || 5000;
server.listen(PORT, function () {
  console.log("Server started to listen to PORT : ".concat(PORT));
});