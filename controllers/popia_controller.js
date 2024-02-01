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

exports.showPopiaForm = (req, res) => {
    res.render('popia');
};

exports.submitPopiaForm = async (req, res) => {
    try {
        const {name, surname, idNumber, number, anumber, house, street, suburb, city, province} = req.body;
        const sql = 'INSERT INTO tbl_applications (name, surname, idNumber, number, anumber, house, street, suburb, city, province) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values  = [
            name, surname, idNumber, number, anumber, house, street, suburb, city, province];

        const [result] = await connection.query(sql, values);
        res.redirect('banking-details');

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.showBankingDetailsForm = (req, res) => {
    res.render('banking-details');
};

exports.submitBankingDetailsForm = (req, res) => {
    res.render('next-of-kin');
};

exports.showNextOfKinForm = (req, res) => {
    res.render('next-of-kin');
};

exports.submitConsentForm = (req, res) => {
    res.render('consent');
};

exports.showConsentForm = (req, res) => {
    res.render('consent');
};

exports.showThankYou = (req, res) => {
    res.render('thank-you');
};


