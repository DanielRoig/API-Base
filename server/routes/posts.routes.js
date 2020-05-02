const express = require('express');
const router = express.Router();

const verify = require('./verifyToken')
const posts = require('../controllers/posts.controller');
const schemas = require('./validations/postSchema')
const validator = require('./validations/validator');

router.get('/', verify, validator(schemas.requestPost), posts.getPosts);
router.post('/', verify, validator(schemas.newPost), posts.createPost);

module.exports = router;