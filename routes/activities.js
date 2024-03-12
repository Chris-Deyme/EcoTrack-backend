var express = require("express");
var router = express.Router();
const Activity = require("../models/activities");

router.get("/showActivity/:category", (req, res) => {
  Activity.find({ category: req.params.category }).then((data) => {
    console.log(data);
    if (data) {
      res.json({ result: true, activities: data });
    } else {
      res.json({ result: false, error: "Pas d'activités trouvées" });
    }
  });
});

router.get("/activityName/:name", (req, res) => {
  const nameRegex = new RegExp(req.params.name.split(" ").join("|"), "i");
  Activity.find({ name: nameRegex })
  // Activity.find({ name: req.params.name })
  .then((data) => {
    console.log("coucou ", data);
    if (data) {
      res.json({ result: true, activities: data });
    } else {
      res.json({ result: false, error: "Planetovore ! Trop nul." });
    }
  });
})

module.exports = router;
