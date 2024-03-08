var express = require('express');
var router = express.Router();
const Tip = require("../models/tipsModels.js")

/* GET home page. */
router.get("/", (req, res) => {
   Tip.find().then((data) => {
      res.json({result: true, tip: data})
   })
});

router.get("/test", (req, res) => {
    // Compter le nombre total de documents dans la collection
    Tip.countDocuments().then(count => {
        // Générer un index aléatoire en fonction du nombre total de documents
        const randomIndex = Math.floor(Math.random() * count);

        // Utiliser l'agrégation pour obtenir un document aléatoire
        Tip.aggregate([
            { $skip: randomIndex }, // Ignorer les documents précédents l'index aléatoire
            { $limit: 1 } // Limiter les résultats à un seul document
        ]).then(result => {
            res.json({ result: true, tip: result });
        }).catch(err => {
            res.status(500).json({ error: err.message });
        });
    }).catch(err => {
        res.status(500).json({ error: err.message });
    });
});

module.exports = router;