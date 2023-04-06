const express = require('express');
const { categoryController } = require('../controllers');
const { validateToken, validateNewCategory } = require('../middlewares');

const router = express.Router();

router.post(
'/',
validateToken,
validateNewCategory,
categoryController.createCategory,
);

module.exports = router;