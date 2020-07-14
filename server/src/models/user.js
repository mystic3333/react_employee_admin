const db = require('../db')

function findUser(sql, username) {
    return db.queryOne(sql, username)
}

module.exports = {
    findUser
}