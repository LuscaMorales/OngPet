const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.post('/login', controller.login);
router.post('/register', controller.register);
router.get('/getAll', controller.getAll);
router.put('/update/:id', controller.update);
router.delete('/delete/:id', controller.delUser);


module.exports = router;