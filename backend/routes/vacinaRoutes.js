const express = require('express');
const controller = require('../controllers/vacinaController');

const router = express.Router();

router.post('/cadastro', controller.cadastro);


module.exports = router;