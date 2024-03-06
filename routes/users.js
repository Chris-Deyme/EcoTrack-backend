var express = require("express");
var router = express.Router();

const User = require("../models/users");
const Score = require("../models/scores");
const { checkBody } = require("../modules/checkBody");
const uid2 = require("uid2");
const bcrypt = require("bcrypt");

// SIGNUP

router.post("/signup", (req, res) => {
  if (!checkBody(req.body, ["username", "email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Vérification notation de l'email

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!EMAIL_REGEX.test(req.body.email)) {
    res.json({ result: false, error: "Invalid email format" });
    return;
  }

  // Regarder si l'utilisateur existe déjà avec un $or qui vérifier si l'un des deux est déjà utilisé
  User.findOne({
    $or: [{ username: req.body.username }, { email: req.body.email }],
  }).then((data) => {
    if (data === null) {
      const hash = bcrypt.hashSync(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        token: uid2(32),
      });

      newUser.save().then((newDoc) => {
        const newScore = new Score({
          score: 0,
          carbone: 0,
          date: new Date(),
          user: newDoc._id,
        });
        newScore.save().then((score) => {

          res.json({
            result: true,
            token: newDoc.token,
            userData: newDoc,
            scoreInfo: score,
          });
        });
      });
    } else {
      // Si l'utilisateur existe déjà...
      res.json({ result: false, error: "User already exists" });
    }
  });
});

// SIGNIN

router.post("/signin", (req, res) => {
  if (!checkBody(req.body, ["email", "password"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Find avec $and qui permet de vérifier que le username ET l'email sont bons

  User.findOne({ email: req.body.email }).then((data) => {
    if (!data) {
      res.json({ result: false, error: "User not found" });
    } else if (bcrypt.compareSync(req.body.password, data.password)) {
      res.json({ result: true, token: data.token, userData: data });
    } else {
      res.json({ result: false, error: "Wrong password" });
    }
  });
});

// DELETE

router.delete("/deleteUser/:username", (req, res) => {
  const userName = req.params.username;
  User.deleteOne({username: userName})
    .then((data) => {
      res.json({ result: true, user: data });
    })
    .catch((err) => {
      res.status(500).json({ result: false, error: err.message });
    });
    
});

// router.delete("/deleteUser/:id", (req, res) => {
//   const userId = req.params.id;
//   const scoreId = req.params.user;
//   Score.deleteOne(scoreId)
//     .then((data) => {
//       console.log(data)
//       User.findByIdAndDelete(userId)
//       .then((data) => {
//       res.json({ result: true, user: data });
//     })})
//     .catch((err) => {
//       res.status(500).json({ result: false, error: err.message });
//     });
    
// });

module.exports = router;
