var express = require('express');
var router = express.Router();
require('../models/connection');

const User = require('../models/users');
const { checkBody } = require('../modules/checkBody');
const uid2 = require('uid2');
const bcrypt = require('bcrypt');

// SIGNUP

router.post('/signup', (req, res) => {
  if (!checkBody(req.body, ['username', 'email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

// Vérification notation de l'email

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(req.body.email)) {
    res.json({ result: false, error: 'Invalid email format' });
    return;
  }

  // Regarder si l'utilisateur existe déjà avec un $or qui vérifier si l'un des deux est déjà utilisé
  User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] }).then(data => {
    if (data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        token: uid2(32),
      });

      newUser.save().then(newDoc => {
        res.json({ result: true, token: newDoc.token });
      });
    } else {
  // Si l'utilisateur existe déjà...
      res.json({ result: false, error: 'User already exists' });
    }
  });
});

// SIGNIN

router.post('/signin', (req, res) => {
  if (!checkBody(req.body, ['username', 'email', 'password'])) {
    res.json({ result: false, error: 'Missing or empty fields' });
    return;
  }

  // Find avec $and qui permet de vérifier que le username ET l'email sont bons

  User.findOne({ $and: [{ username: req.body.username }, { email: req.body.email }] }).then(data => {
    if (!data) {
      res.json({ result: false, error: 'User not found' });
    } else if (bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token });
    } else {
      res.json({ result: false, error: 'Wrong password' });
    }
  });
});

module.exports = router;
