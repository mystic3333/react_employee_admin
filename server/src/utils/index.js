const jwt = require('jsonwebtoken')
const jwtDecode = require('jwt-decode')

function signToken(payload, secret) {    
    const token = jwt.sign(payload, secret, {
        expiresIn: 60 * 60
    })
    return token
}

function decode(token) {
    return jwtDecode(token)
}

module.exports = {
    signToken,
    decode
}