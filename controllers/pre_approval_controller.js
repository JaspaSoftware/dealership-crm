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

exports.showForm = (req, res) => {
    res.render('pre-approve-now');
};

exports.submitForm = async (req, res) => {
    try {
        const { name, surname, email, number, vehicle, source } = req.body;
        const sql = 'INSERT INTO `tbl_pre-approvals` (name, surname, email, number, vehicle, source) VALUES (?, ?, ?, ?, ?, ?)';
        const values = [name, surname, email, number, vehicle, source];
        const [result] = await connection.query(sql, values);
        res.redirect('pre-approval-submitted');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.showPreApprovalSubmitted = (req, res) => {
    res.render('pre-approval-submitted');
};