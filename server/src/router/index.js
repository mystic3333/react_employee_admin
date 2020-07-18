const express = require('express')
const router = express.Router()
const userRouter = require('./routes/user')
const departmentRouter = require('./routes/department')
const { JsonWebTokenError } = require('jsonwebtoken')


router.use(function (req, res, next) {
    console.log('请求前中间件')
    next()
})

router.use('/user', userRouter)
router.use('/department', departmentRouter)

router.use(function (err, req, res, next) {
    if (err) {
        const { statusCode, error, message } = err.output.payload
        res.status(statusCode).json({
            error,
            message
        })
    } else {
        next()
    }
})


module.exports = router