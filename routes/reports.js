const express = require('express');
const router = express.Router();

const auth = require("../models/auth.js");
const reports = require("../models/reports.js");

router.get("/:report_id",
    (req, res, next) => auth.checkToken(req, res, next),
    (req, res) => reports.getReport(res, req.params.invoice_id));

router.post("/",
    (req, res, next) => auth.checkToken(req, res, next),
    (req, res) => reports.addReport(res, req.body));


module.exports = router;