const express = require('express')
const uuid = require('uuid')
const router = express.Router()
const userModel = require('../../../models/user')
const utils = require('../../../utils')
const constant = require('../../../constant')

let serverCode = null

router.get('/login', function (req, res) {
    const { username, code } = req.query
    const sql = `select * from user where username = ?`

    if (serverCode === code) {
        userModel.findUser(sql, username)
        .then(data => {
            const {id, username} = data[0]
            if (data && data.length > 0) {
                // 签发token
                const token = utils.signToken({id, username}, constant.SECRET)
                res.send({
                    type: 'success',
                    token
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