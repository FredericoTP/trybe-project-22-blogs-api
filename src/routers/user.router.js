const express = require('express');
const { userController } = require('../controllers');
const { validateToken } = require('../middlewares');

const router = express.Router();

router.post('/', userController.createUser);

router.get('/', validateToken, userController.getAllUsers);

router.get('/:id', validateToken, userController.getById);

module.exports = router;