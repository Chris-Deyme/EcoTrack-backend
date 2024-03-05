var express = require("express");
var router = express.Router();
const Score = require("../models/scores");
const User = require("../models/users");

router.post("/creation", (req, res) => {
  User.findOne({ token: req.body.token }).then((user) => {
    const newScore = new Score({
      score: 0,
      carbone: 0,
      date: new Date(),
      user: user._id,
    });
    newScore.save().then((newScore) => {
      res.json({ result: true, score: newScore });
    });
  });
});

router.get("/showScore/:user", (req, res) => {
  Score.findOne({ user: req.params.user }).then((score) => {
    console.log(score);
    if (score) {
      res.json({ result: true, score: score });
    } else {
      res.json({ result: false, error: "Pas de score trouvé" });
    }
  });
});

router.put("/updateScore/:user", (req, res) => {
  //trouver le score du user
  Score.findOne({ user: req.params.user }).then((score) => {
    // créer un nouveuau number qui additionne l'ancien avec la donnée à ajouter
    const newScore = Number(score.score) + Number(req.body.scoreIncrement);
    const newCarbone =
      Number(score.carbone) + Number(req.body.carboneIncrement);
    // modifie le score existant avec le nouveau score additionné
    Score.updateOne(
      { user: req.params.user },
      { score: newScore, carbone: newCarbone }
    ).then((data) => {
      res.json({ result: true, score: data });
    });
  });
});

router.delete("/deleteScore/:user", (req, res) => {
  Score.deleteOne({ user: req.params.user })
    .then((data) => {
      res.json({ result: true, response: "Score supprimé" });
    })
    .catch((err) => {
      res.status(500).json({ result: false, error: "Pas supprimé" });
    });
});

// router.get("/showScore/:user", (req, res) => {
//   Score.findOne({user: req.params.user}).then((user) => {
//     console.log(user)
//     if (user) {
//       res.json({ result: true, score: user });
//     } else {
//       res.json({ result: false, error: "0 Jokes" });
//     }
//   })
// })

module.exports = router;
