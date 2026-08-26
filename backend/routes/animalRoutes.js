const express = require('express');
const controller = require('../controllers/animalController');
const multer = require('multer');
const upload = multer({dest: "uploads/"});


const router = express.Router();

router.get('/checkAnimal/:id', controller.check);
router.post('/cadastroAnimal', upload.single("image"), controller.cadastro);
router.get('/animalCompleto/:id', controller.animalCompleto);


module.exports = router;