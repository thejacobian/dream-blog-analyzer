const express = require('express');
const router = express.Router();
// const User = require('../models/users');
const Dream = require('../models/dreams');


// INDEX ROUTE
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

// SHOW ROUTE
router.get('/:id', async (req, res) => {
    try {
        const oneDream = Dream.findById(req.params.id);
        res.render('dreams/show.ejs', {
            dream: oneDream
        })
    }catch(err){
        res.send(err)
    }
});

// NEW ROUTE
router.get('/new', (req, res) => {
    res.render('dreams/new.ejs')
});

// CREATE ROUTE

// EDIT ROUTE
router.get('/:id/edit', (req, res) => {
    try {
        const editDream = Dream.findById(req.params.id);
        res.render('dreams/new.ejs', {
            dream: editDream
        })
    } catch(err){
        res.send(err)
    }
});

// UPDATE ROUTE

// DELETE ROUTE


module.exports = router;