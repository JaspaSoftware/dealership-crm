
const express = require('express');
const {getIndexPage} = require("../controllers/main_controller");
const {showForm, submitForm, showPreApprovalSubmitted} = require("../controllers/pre_approval_controller");
const {bookTestDriveForm, submitTestDriveForm, showBookingConfirmed} = require("../controllers/lexus_controller");
const {showPopiaForm, submitPopiaForm, showBankingDetailsForm, submitBankingDetailsForm} = require("../controllers/popia_controller");
const router = express.Router();

router.get('/', getIndexPage);

router.get('/pre-approve-now', showForm);
router.post('/pre-approve-now', submitForm);

router.get('/pre-approval-submitted', showPreApprovalSubmitted);

router.get('/lexus', bookTestDriveForm);
router.post('/lexus', submitTestDriveForm);

router.get('/test-drive-confirmed', showBookingConfirmed);

router.get('/popia', showPopiaForm);
router.post('/popia', submitPopiaForm);

router.get('/banking-details', showBankingDetailsForm);
router.post('/banking-details', submitBankingDetailsForm);

module.exports = router;
