const express = require('express');
const { loginController } = require('../controllers');
const { validateLoginFields } = require('../middlewares');

const router = express.Router();

router.post('/', validateLoginFields, loginController.singIn);

module.exports = router;