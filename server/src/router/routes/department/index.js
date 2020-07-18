const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const boom = require('boom')
const db = require('../../../db')
const {Result} = require('../../../utils')

router.post('/add', function (req, res, next) {

    const {name, members, status, description} = req.body
    const sqlParams = [name, members, status, description]
    const sql = `insert into department values(null,?,?,?,?)`
    db.insert(sql, sqlParams)
        .then(data => {
            if (data) {
                new Result('插入唱功').buildSuccess(res)
            }
        })
        .catch(err => {
            next(boom.badRequest(err))
        })
})

module.exports = router