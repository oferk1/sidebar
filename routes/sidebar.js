var express = require('express');
var sidebar = require('./sidebar.json');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(sidebar);
});

module.exports = router;
