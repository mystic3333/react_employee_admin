const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const userModel = require('../../../models/user')

let serverCode = null

router.get('/login', function (req, res) {
    const { username, code } = req.query
    const sql = `select * from user where username = ?`

    if (serverCode === code) {
        userModel.findUser(sql, username)
        .then(data => {
            if (data && data.length > 0) {
                res.send({
                    type: 'success'
                })
            }
        })
    } else {
        res.send({
            code: -1,
            type: 'fail',
            errMsg: '验证码错误'
        })
    }
    
})

router.get('/getCode', function (req, res) {
    const uid = uuid.v4().substr(0, 4)
    serverCode = uid

    res.send({
        code: 0,
        msg: 'success',
        data: {
            uid
        }
    })
})

module.exports = router