const express = require('express');
const router = express.Router();
const User = require('../models/users');
const Dream = require('../models/dreams');

// index route
router.get('/', async (req, res) => {
    try {
        res.render('index.ejs', {
            users: users
        });
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;