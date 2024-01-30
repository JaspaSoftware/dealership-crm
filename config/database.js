require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'dealership-crm'
});

module.exports = connection;
