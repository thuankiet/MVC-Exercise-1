const express = require('express');
const shortId = require('shortid');

const db = require('../db.js');
const controller = require('../controllers/transaction.controller.js');

const router = express.Router();

router.get('/', controller.index);

router.get('/create', controller.create);

router.post('/create', controller.postCreate);

module.exports = router;