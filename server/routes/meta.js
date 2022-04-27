var express = require('express');
var router = express.Router();
var db = require('../models')

router.get('/tables', (req, res, next) => {
	db.sequelize.getQueryInterface().showAllTables()
	.then((data) => res.json(data))
	.catch((err) => next(err));
});

router.get('/tables/:name', (req, res, next) => {
	db.sequelize.getQueryInterface().describeTable(req.params.name)
	.then((data) => res.json(data))
	.catch((err) => next(err));
})

module.exports = router;
