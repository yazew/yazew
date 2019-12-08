"use strict";

var path = require('path');

var express = require('express');

var webapp = express();

var bodyParser = require('body-parser');

var rp = require('request-promise-native');

var ejs = require('ejs');

webapp.set('view engine', 'ejs');
webapp.set('views', path.resolve('src/views'));
webapp.get('/', function (req, res) {
  var options = {
    url: 'http://localhost:5000/api/tips/free',
    method: 'GET',
    json: true
  };
  rp(options).then(function (data) {
    var freeTips = [];
    data.map(function (d) {
      if (d.free) {
        freeTips.push(d);
      }
    });
    res.render('free_tips.html.ejs', {
      tips: freeTips
    });
  })["catch"](function (error) {
    res.render('error.html.ejs', {
      error: error
    });
  });
});
webapp.get('/vip', function (req, res) {
  var options = {
    url: 'http://localhost:5000/api/tips/vip',
    method: 'GET',
    json: true
  };
  rp(options).then(function (data) {
    res.render('vip_tips.html.ejs', {
      tips: data
    });
  })["catch"](function (error) {
    res.render('error.html.ejs', {
      error: error.message
    });
  });
});
module.exports = webapp;