var express = require('express');
var router = express.Router();
const Quest = require("../models/quests.js");

router.get("/", (req, res) => {
   Quest.find().then((data) => {
      res.json({result: true, quest: data})
   })
});

router.get("/test", (req, res) => {
   // countDocuments() >>> renvoi une promesse qui sera résolu ...
   //... avec le nombre de document dans la collection, ...
   // ... récupère le nombre de quest en BDD 
   Quest.countDocuments().then(count => {
      const randomQuest = Math.floor(Math.random() * count);

      // opération d'agrégation dans MongoDB te permet de trier, ...
      //... filtrer, et combiner des documents dans une collection
      Quest.aggregate([
         // pour sauter un nombre aléatoire de quest dans la collection
         { $skip: randomQuest },
         // donne le nombre de documents retenus (1)
         { $limit: 1 }
      ]).then(result => {
         res.json({ result: true, quest: result });
      }).catch(err => { // "capture" de l'erreur de .agrégate([{$skip, $limit}])
         res.status(500).json({ error: err.message });
      });
   }).catch(err => { // "capture" de l'erreur de .countDocuments()
      res.status(500).json({ error: err.message });
   });
});

module.exports = router;