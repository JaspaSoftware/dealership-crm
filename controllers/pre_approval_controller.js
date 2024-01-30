const db = require('../config/database');

exports.showForm = (req, res) => {
    res.render('pre-approve-now');
};

exports.submitForm = (req, res) => {
    try {
        console.log('form submited');
        res.redirect('pre-approval-submitted')
       // res.render('/pre-approval-submitted.ejs');
        // const { name, surname, email, number, vehicle, source } = req.body;
        // const sql = 'INSERT INTO tbl_pre_approvals (name, surname, email, number, vehicle, source) VALUES (?, ?, ?, ?, ?, ?)';
        // const values = [name, surname, email, number, vehicle, source];
        //
        // db.query(sql, values, (err, result) => {
        //     if (err) {
        //         console.error('Error inserting data into MySQL: ', err);
        //         res.status(500).send('Internal Server Error');
        //     } else {
        //         console.log('Data inserted successfully');
        //         res.redirect('/pre-approval-submitted-successfully');
        //     }
        // });
    } catch (error) {
        console.error('Error: ', error);
        res.status(500).send('Internal Server Error');
    }
};

exports.showPreApprovalSubmitted = (req, res) => {
    res.render('pre-approval-submitted');
};