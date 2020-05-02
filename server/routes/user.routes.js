const express = require('express');
const router = express.Router();

const user = require('../controllers/user.controller');
const schemas = require('./validations/userSchema')
const validator = require('./validations/validator');

router.post('/signup', validator(schemas.signUp), user.signup);
router.get('/login', validator(schemas.login), user.login);

module.exports = router;