const express = require('express');
const router = express.Router();
const User = require('../models/users');
const bcrypt = require('bcryptjs');

router.get('/register', async (req, res) => {
    res.render('auth/register.ejs');
});

router.post('/register', async (req, res) => {
    const password = req.body.password;
    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const userDbEntry = {};
    userDbEntry.username = req.body.username;
    userDbEntry.password = passwordHash;
    try {
      const createdUser = await User.create(userDbEntry);
      req.session.logged = true;
      req.session.usersDbId = createdUser._id;
      res.redirect('/users');
    } catch(err){
      res.send(err)
    }
  });

module.exports = router;