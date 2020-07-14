const mysql = require('mysql')
const {dbConfig} = require('../config')

const db = mysql.createConnection({
    host: dbConfig.host,
    user: dbConfig.user,
    password: dbConfig.password,
    port:  dbConfig.port,
    database: dbConfig.database,
})

function queryOne(sql, params=[]) {
    return new Promise((resolve, reject) => {
        db.query(sql, params, (errors, result, fields) => {
            if (errors) {
                reject(errors)
            } else {
                resolve(result)
            }
        })
    })
}

module.exports = {
    queryOne
}