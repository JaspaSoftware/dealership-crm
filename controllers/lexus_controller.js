const connection = require("../config/database");


exports.bookTestDriveForm = (req, res) => {
    res.render('lexus');
};

exports.submitTestDriveForm = async (req, res) => {
    try {
        const {name, surname, email, number} = req.body;
        const requestDate = new Date().toISOString().slice(0, 19).replace('T', ' ');

        const [result] = await connection.query(
            'INSERT INTO tbl_test_drives (name, surname, email, number, requestDate, car) VALUES (?, ?, ?, ?, ?, "Lexus")',
            [name, surname, email, number, requestDate]
        );

        // Check if the insertion was successful
        if (result.affectedRows === 1) {
            res.redirect('/test-drive-confirmed'); // Redirect to a thank-you page
        } else {
            // Failed insertion
            res.status(500).send('Error storing data in the database.');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

exports.showBookingConfirmed = (req, res) => {
    res.render('test-drive-confirmed');
};