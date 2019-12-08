const express = require('express')
const api = express()
const moment = require('moment')
const momentRandom = require('moment-random')
const bodyParser = require('body-parser')
api.use(bodyParser.json({extended: false}))
api.get('/',(req, res) => {
  res.status(200).json({
    message: 'Welcome to our API'
  })
})
api.get('/tips/free', (req, res) => {
  let today = new Date()
  let start = moment(today.toISOString()).subtract(2, 'weeks').toDate()
  let end =   moment(today.toISOString()).add(2, 'weeks').toDate()
  let fixture = {
    team1: 'FC ',
    team2: 'FC ',
    description: 'FC A vs FC B',
    time: momentRandom(end,start).toDate(),
    tip: '1X',
    result: '2',
    free: true
  }
  let tips = []
  for(let i=1; i<= 100; i++) {
    let match = {}
    match.team1=fixture.team1+'- '+ i
    match.team2=fixture.team2+'- '+ i
    match.description= match.team1 + ' vs ' + match.team2
    match.tip= i%15 == 0 ? '1X' : 'X2'
    match.output = i%20 == 0 ? '1X' : 'X2'
    match.result=match.output === '1X' ? ((3*i)%7)+' : '+ 0 : 0+' : '+((3*i)%7)
    match.time= momentRandom(end, start).toDate()
    match.free = i%20 == 0 ? true : false
    match.visible = match.time <= Date.now()
    match.match_is_today = match.time.toDateString() === (new Date()).toDateString() ? 'YES' : 'NO'
    if(match.free) { tips.push(match) }
  }
  res.set('Content-Type', 'text/html')
  res.status(200).json(tips)


})
api.get('/tips/vip', (req, res) => {
  let today = new Date()
  let start = moment(today.toISOString()).subtract(2, 'weeks').toDate()
  let end =   moment(today.toISOString()).add(2, 'weeks').toDate()
  let fixture = {
    team1: 'FC ',
    team2: 'FC ',
    description: 'FC A vs FC B',
    time: momentRandom(end,start).toDate(),
    tip: '1X',
    result: '2',
    free: true
  }
  let tips = []
  for(let i=1; i<= 100; i++) {
    let match = {}
    match.team1=fixture.team1+'- '+ i
    match.team2=fixture.team2+'- '+ i
    match.description= match.team1 + ' vs ' + match.team2
    match.tip= i%15 == 0 ? '1X' : 'X2'
    match.output = i%20 == 0 ? '1X' : 'X2'
    match.result=match.output === '1X' ? ((3*i)%7)+' : '+ 0 : 0+' : '+((3*i)%7)
    match.time= momentRandom(end, start).toDate()
    match.free = i%20 == 0 ? true : false
    match.visible = match.time <= Date.now()
    match.match_is_today = match.time.toDateString() === (new Date()).toDateString() ? 'YES' : 'NO'
    tips.push(match)
  }
  res.set('Content-Type', 'text/html')
  res.status(200).json(tips)

})
module.exports= api