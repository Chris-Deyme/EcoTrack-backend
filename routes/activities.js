var express = require("express");
var router = express.Router();
const Activity = require("../models/activities");

router.get("/showActivity/:category", (req, res) => {
  Activity.find({ category: req.params.category }).then((data) => {
    if (data) {
      res.json({ result: true, activities: data });
    } else {
      res.json({ result: false, error: "Pas d'activités trouvées" });
    }
  });
});

router.get("/activityName/:name", (req, res) => {
  const nameRegex = new RegExp(req.params.name.split(" ").join("|"), "i");
  console.log("this", nameRegex)
  Activity.find({ name: nameRegex })
    .then((data) => {
      if (data) {
        res.json({ result: true, activities: data });
      } else {
        res.json({ result: false, error: "Planetovore ! Trop nul." });
      }
    });
});

router.get("/showActivity", (req, res) => {
  Activity.find().then((data) => {
    if (data) {
      res.json({ result: true, activities: data });
    } else {
      res.json({ result: false, error: "Pas d'activités trouvées" });
    }
  });
});

module.exports = router;
