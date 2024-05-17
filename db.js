const {Client} = require("pg")

const user = 'postgres'
const password = '12345'
const host = 'localhost'
const database = 'ams'
const port = '5432'

const db = new Client ({
    user,password,host,database,port
})

module.exports = db