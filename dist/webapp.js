"use strict";

var path = require('path');

var os = require('os');

var express = require('express');

var webapp = express();

var bodyParser = require('body-parser');

var rp = require('request-promise-native');

var ejs = require('ejs');

var host = os.hostname();
webapp.set('view engine', 'ejs');
webapp.set('views', path.resolve('src/views'));
webapp.get('/', function (req, res) {
  var fullUrl = req.protocol + '://' + req.get('host');
  var options = {
    url: [fullUrl, 'api/tips/free'].join('/'),
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
  var fullUrl = req.protocol + '://' + req.get('host');
  var options = {
    url: [fullUrl, 'api/tips/free'].join('/'),
    method: 'GET',
    json: true
  };
  console.log(options);
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