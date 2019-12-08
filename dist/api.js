"use strict";

var express = require('express');

var api = express();

var moment = require('moment');

var momentRandom = require('moment-random');

var bodyParser = require('body-parser');

api.use(bodyParser.json({
  extended: false
}));
api.get('/', function (req, res) {
  res.status(200).json({
    message: 'Welcome to our API'
  });
});
api.get('/tips/free', function (req, res) {
  var today = new Date();
  var start = moment(today.toISOString()).subtract(2, 'weeks').toDate();
  var end = moment(today.toISOString()).add(2, 'weeks').toDate();
  var fixture = {
    team1: 'FC ',
    team2: 'FC ',
    description: 'FC A vs FC B',
    time: momentRandom(end, start).toDate(),
    tip: '1X',
    result: '2',
    free: true
  };
  var tips = [];

  for (var i = 1; i <= 100; i++) {
    var match = {};
    match.team1 = fixture.team1 + '- ' + i;
    match.team2 = fixture.team2 + '- ' + i;
    match.description = match.team1 + ' vs ' + match.team2;
    match.tip = i % 15 == 0 ? '1X' : 'X2';
    match.output = i % 20 == 0 ? '1X' : 'X2';
    match.result = match.output === '1X' ? 3 * i % 7 + ' : ' + 0 : 0 + ' : ' + 3 * i % 7;
    match.time = momentRandom(end, start).toDate();
    match.free = i % 20 == 0 ? true : false;
    match.visible = match.time <= Date.now();
    match.match_is_today = match.time.toDateString() === new Date().toDateString() ? 'YES' : 'NO';

    if (match.free) {
      tips.push(match);
    }
  }

  res.set('Content-Type', 'text/html');
  res.status(200).json(tips);
});
api.get('/tips/vip', function (req, res) {
  var today = new Date();
  var start = moment(today.toISOString()).subtract(2, 'weeks').toDate();
  var end = moment(today.toISOString()).add(2, 'weeks').toDate();
  var fixture = {
    team1: 'FC ',
    team2: 'FC ',
    description: 'FC A vs FC B',
    time: momentRandom(end, start).toDate(),
    tip: '1X',
    result: '2',
    free: true
  };
  var tips = [];

  for (var i = 1; i <= 100; i++) {
    var match = {};
    match.team1 = fixture.team1 + '- ' + i;
    match.team2 = fixture.team2 + '- ' + i;
    match.description = match.team1 + ' vs ' + match.team2;
    match.tip = i % 15 == 0 ? '1X' : 'X2';
    match.output = i % 20 == 0 ? '1X' : 'X2';
    match.result = match.output === '1X' ? 3 * i % 7 + ' : ' + 0 : 0 + ' : ' + 3 * i % 7;
    match.time = momentRandom(end, start).toDate();
    match.free = i % 20 == 0 ? true : false;
    match.visible = match.time <= Date.now();
    match.match_is_today = match.time.toDateString() === new Date().toDateString() ? 'YES' : 'NO';
    tips.push(match);
  }

  res.set('Content-Type', 'text/html');
  res.status(200).json(tips);
});
module.exports = api;