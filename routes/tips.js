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
    Tip.countDocuments().then(count => {
        const randomIndex = Math.floor(Math.random() * count);
        Tip.aggregate([
            { $skip: randomIndex }, 
            { $limit: 1 }
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