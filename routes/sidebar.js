var express = require('express');
var sidebar = require('./sidebar.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.set({"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"});
	res.set({"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE", "Content-Type": "application/json"});
	res.json(sidebar);
});

module.exports = router;
