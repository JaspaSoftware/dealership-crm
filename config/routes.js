
const express = require('express');
const {getIndexPage} = require("../controllers/main_controller");
const {showForm, submitForm, showPreApprovalSubmitted} = require("../controllers/pre_approval_controller");
const router = express.Router();

router.get('/', getIndexPage);

router.get('/pre-approve-now', showForm);
router.post('/pre-approve-now', submitForm);

router.get('/pre-approval-submitted', showPreApprovalSubmitted);

module.exports = router;
