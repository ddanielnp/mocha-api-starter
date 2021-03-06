var express = require('express')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var mongoose = require('mongoose')
var tacosController = require('./controllers/tacos_controller')
var app = express()

mongoose.connect('mongodb://travis_mocha:mocha@ds161873.mlab.com:61873/travis_mocha_api_starter')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function (req, res) {
  res.send('hello')
})

app.use('/tacos', tacosController)

var server = app.listen(process.env.PORT || 3000)
console.log('Server UP localhost', server)

// we export the running server so we can use it in testing
module.exports = server
