const express = require('express')
const app = express()
const router = require('./router/index.js')

app.use('/',router)

app.listen(5000, function() {
    console.log('listening port in 5000')
})