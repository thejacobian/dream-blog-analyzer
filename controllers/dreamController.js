const express = require('express');
const router = express.Router();
// const User = require('../models/users');
const Dream = require('../models/dreams');

router.get('/', async (req, res) => {
    try {
        const allDreams = Dream.find();
        res.render('dreams/index.ejs', {
            dreams: allDreams
        });
    }catch(err){
        res.send(err)
    };
});

module.exports = router;