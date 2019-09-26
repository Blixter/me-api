var express = require('express');
var router = express.Router();
const me = require("../models/me.js");

router.get('/',
    (req, res) => me.getMe(res)
);

module.exports = router;
