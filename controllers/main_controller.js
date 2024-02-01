
const mysql = require("mysql2/promise");

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

exports.getIndexPage = (req, res) => {
    res.render('index');
};

exports.showAboutKb = (req, res) => {
    res.render('kb');
};

exports.showRefer = (req, res) => {
    res.render('refer');
};

exports.submitReferral = async (req, res) => {
    try {
        const {name, surname, email, number} = req.body;
       const sql = 'INSERT INTO tbl_referals (name, surname, email, number) VALUES (?, ?, ?, ?)';
       const values = [name, surname, email, number];
       const [result] = await connection.query(sql,values)
        res.redirect('/referral-link');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.showReferralLink = (req, res) => {
    res.render('referral-link');
};

