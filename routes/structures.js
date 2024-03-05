var express = require("express");
var router = express.Router();
const Structure = require("../models/structures");
const User = require("../models/users");
const { checkBody } = require("../modules/checkBody");

router.post("/newStructure", (req, res) => {
  if (!checkBody(req.body, ["name", "category", "user"])) {
    res.json({ result: false, error: "Missing or empty fields" });
    return;
  }

  // Regarder si la structure existe déjà, si non, en créer une nouvelle.
  User.findOne({ token: req.body.token }).then((user) => {
    console.log("undeux", user)
    Structure.findOne({ name: req.body.name }).then((data) => {
      console.log(data);
      if (data === null) {
        const newStructure = new Structure({
          name: req.body.name,
          category: req.body.category,
          user: user._id,
          address: {
            street: req.body.street,
            city: req.body.city,
            postcode: req.body.postcode,
          },
        });

        newStructure.save().then((structure) => {
          res.json({ result: true, structure: structure });
        });
      } else {
        // Si l'utilisateur existe déjà...
        res.json({ result: false, error: "Stucture already exists" });
      }
    });
  });
});

// GET POUR AFFICHER TOUES LES STRUCTURES


router.get("/showStructure", (req, res) => {
    Structure.find().then(data => {
    
        res.json({ structures: data });
      })
    });
;

module.exports = router;
