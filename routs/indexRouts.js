const express = require('express');

const router = express.Router();

const loginController = require('../Controllers/loginController');


router.get('/',loginController.reqforHome);
router.post('/',loginController.checkingforLogin);
router.get('/home',loginController.reqforHome);
router.get('/logout',loginController.logout);


module.exports = router;