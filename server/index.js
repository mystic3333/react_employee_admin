const express = require('express')
const app = express()
const router = require('./src/router')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use('/',router) 

app.listen(5000, function() {
    console.log('listening port in 5000')
})