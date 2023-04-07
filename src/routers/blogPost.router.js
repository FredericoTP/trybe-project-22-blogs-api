const express = require('express');
const { blogPostController } = require('../controllers');
const { validateToken } = require('../middlewares');

const router = express.Router();

router.get('/', validateToken, blogPostController.getAllPosts);

router.get('/:id', validateToken, blogPostController.getById);

module.exports = router;