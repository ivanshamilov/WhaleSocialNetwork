const express = require('express');
const router = express.Router();

const userController = require('../controllers/user-controllers');

// Sign Up 
// Login

router.get('/users', userController.getUsers);


module.exports = router;