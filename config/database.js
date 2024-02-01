require('dotenv').config();
const mysql = require('mysql2/promise');

const connectionPromise = new Promise((resolve, reject) => {
    const connection = mysql.createPool({
        connectionLimit: 10,
        host: 'jaspa-mysqldb-server.mysql.database.azure.com',
        user: 'jaspadbadmin',
        password: '1qazxsw2#EDC',
        database: 'dealercrm',
        ssl: {
            rejectUnauthorized: false,
        },
    });
});

module.exports = connectionPromise;
