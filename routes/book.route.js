const express = require('express');

const controller = require('../controllers/book.controller.js')

const router = express.Router();

router.get('/', controller.index);

router.get('/edit-form/:id', controller.edit);

router.get('/:id/delete', controller.delete);

router.post('/edit/:id', controller.postEdit);

router.post('/', controller.postIndex);

module.exports = router;