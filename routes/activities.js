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

module.exports = router;
