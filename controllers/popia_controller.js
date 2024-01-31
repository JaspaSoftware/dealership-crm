
const connection = require("../config/database");
exports.showPopiaForm = (req, res) => {
    res.render('popia');
};

exports.submitPopiaForm = async (req, res) => {
    try {
        const {
            name,
            surname,
            idNumber,
            number,
            anumber,
            house,
            street,
            suburb,
            city,
            province,
        } = req.body;

        const [result] = await connection.execute(
            'INSERT INTO tbl_applications (name, surname, idNumber, number, anumber, house, street, suburb, city, province) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
            [
                name,
                surname,
                idNumber,
                number,
                anumber,
                house,
                street,
                suburb,
                city,
                province
            ]);

        if (result.affectedRows === 1) {
            res.redirect('banking-details');
        } else {
            // Failed insertion
            res.status(500).send('Error storing data in the database.');
        }
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
    res.render('thank-you');
};

exports.showConsentForm = (req, res) => {
    res.render('consent');
};

exports.showThankYou = (req, res) => {
    res.render('thank-you');
};


