var express = require('express');
var router = express.Router();
let db = require('../models');
let Query = require('./index');

const query = new Query(db.messages);

router.get('/', (req, res, next) => query.getAll(req, res, next));
router.get('/:id', (req, res, next) => query.getById(req,res, next));
router.post('/', (req, res, next) => query.createOne(req,res, next));
router.put('/:id', (req, res, next) => query.updateById(req,res, next));
router.delete('/:id', (req, res, next) => query.deleteById(req,res, next));

module.exports = router;
