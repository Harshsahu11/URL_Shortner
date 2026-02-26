const express = require('express');
const {handleUSerSignup,handleUserLogin} = require('../controllers/user.controller');
const router = express.Router();

router.post('/signup',handleUSerSignup);
router.post('/login',handleUserLogin);

module.exports = router;