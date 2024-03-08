var express = require('express');
var router = express.Router();
const Quest = require("../models/quests.js");

router.get("/", (req, res) => {
   Quest.find().then((data) => {
      res.json({result: true, quest: data})
   })
});

router.get("/test", (req, res) => {
   Quest.countDocuments().then(count => {
      const randomQuest = Math.floor(Math.random() * count);

      Quest.aggregate([
         { $skip: randomQuest },
         { $limit: 1 }
      ]).then(result => {
         res.json({ result: true, quest: result });
      }).catch(err => {
         res.status(500).json({ error: err.message });
      });
   }).catch(err => {
      res.status(500).json({ error: err.message });
   });
});

module.exports = router;