const mysql = require('mysql2')
const dotenv = require('dotenv')

dotenv.config()

const conn = mysql.createPool({
	connectionLimit: process.env.DB_CONN_LIMIT,
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_SCHEMA
})

module.exports = conn