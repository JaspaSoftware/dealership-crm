const connection = require("../config/database");


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
        // Extract data from the request body
        const {name, surname, email, number} = req.body;

        const [result] = await connection.execute(
            'INSERT INTO tbl_referals (name, surname, email, number) VALUES (?, ?, ?, ?)',
            [name, surname, email, number]
        );

        if (result.affectedRows === 1) {
            res.redirect('/referral-link')
        } else {
            // Failed insertion
            res.status(500).send('Error storing data in the database.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.showReferralLink = (req, res) => {
    res.render('referral-link');
};

