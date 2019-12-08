const path = require('path')
const express = require('express')
const webapp = express()
const bodyParser = require('body-parser')
const rp = require('request-promise-native')
const ejs = require('ejs')

webapp.set('view engine', 'ejs')
webapp.set('views',path.resolve('src/views'))
webapp.get('/',(req, res) => {
  let options = {
    url: 'http://localhost:5000/api/tips/free',
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
  let options = {
    url: 'http://localhost:5000/api/tips/vip',
    method: 'GET',
    json: true
  }
  rp(options).then(data => {
    res.render('vip_tips.html.ejs', { tips: data})
  })
  .catch(error => {
    res.render('error.html.ejs', {error: error.message})
  }) 
})
module.exports= webapp