const path = require('path')
const os = require('os')
const express = require('express')
const webapp = express()
const bodyParser = require('body-parser')
const rp = require('request-promise-native')
const ejs = require('ejs')
const host = os.hostname()
webapp.set('view engine', 'ejs')
webapp.set('views',path.resolve('src/views'))
webapp.get('/',(req, res) => {
  let fullUrl = req.protocol + '://' + req.get('host')
  let options = {
    url: [fullUrl,'api/tips/free'].join('/'),
    method: 'GET',
    json: true
  }
  rp(options).then(data => {
    let freeTips = []
    data.map(d => { if(d.free){ freeTips.push(d)}})
    res.render('free_tips.html.ejs', { tips: freeTips})
  })
  .catch(error => {
    res.render('error.html.ejs', {error: error})
  })
})
webapp.get('/vip', (req, res) => {
  let fullUrl = req.protocol + '://' + req.get('host')
  let options = {
    url: [fullUrl,'api/tips/free'].join('/'),
    method: 'GET',
    json: true
  }
  console.log(options)
  rp(options).then(data => {
    res.render('vip_tips.html.ejs', { tips: data})
  })
  .catch(error => {
    res.render('error.html.ejs', {error: error.message})
  }) 
})
module.exports= webapp