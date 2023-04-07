const express = require('express');
const { blogPostController } = require('../controllers');
const { validateToken } = require('../middlewares');

const router = express.Router();

router.get('/', validateToken, blogPostController.getAllPosts);

module.exports = router;