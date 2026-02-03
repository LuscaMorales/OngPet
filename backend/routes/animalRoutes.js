const express = require('express');
const controller = require('../controllers/animalController');

const router = express.Router();

router.get('/checkAnimal/:id', controller.check);
router.post('/cadastroAnimal', controller.cadastro);
router.get('/animalCompleto/:id', controller.animalCompleto);


module.exports = router;