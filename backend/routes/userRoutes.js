const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.post('/login', controller.login);
router.post('/cadastro', controller.cadastro);


module.exports = router;