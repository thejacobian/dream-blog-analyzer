const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');

router.get('/register', async (req, res) => {
    res.render('auth/register.ejs');
});


module.exports = router;