class Result {
    code = 0
    msg = ''
    data = {}
    options = null
    constructor(msg, data = {}, code = 0, options = {}) {
        this.code = code
        this.msg = msg
        this.data = data
        this.options = options
    }

    buildSuccess(res = null, code = 0) {
        if (Object.prototype.toString.call(res) === '[object Object]') {
            res.status(200).json({
                code: code || this.code,
                type: 'success',
                msg: this.msg,
                data: this.data
            })
        }
    }
    buildFail(res = null, code = -1) {
        if (Object.prototype.toString.call(res) === '[object Object]') {
            res.status(200).json({
                code: code || this.code,
                type: 'fail',
                msg: this.msg
            })
        }
    }
}

module.exports = Result