const express = require('express');
const { blogPostController } = require('../controllers');
const { validateToken, validateUpdatePost } = require('../middlewares');

const router = express.Router();

router.get('/', validateToken, blogPostController.getAllPosts);

router.get('/search', validateToken, blogPostController.searchPost);

router.get('/:id', validateToken, blogPostController.getById);

router.put('/:id', validateToken, validateUpdatePost, blogPostController.updatePost);

router.delete('/:id', validateToken, blogPostController.removePost);

module.exports = router;