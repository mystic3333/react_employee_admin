const express = require('express')
const router  = express.Router()

router.get('/login', function(req, res) {
    console.log(req.query)
    res.send({
        msg: 'success'
    })
})

router.get('/getCode', function(req, res) {
    res.send({
        code: 0,
        msg: 'success',
        data: 1111
    })
})

module.exports = router