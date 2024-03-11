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
    Structure.findOne({ name: req.body.name }).then((data) => {
      if (data === null) {
        const newStructure = new Structure({
          name: req.body.name,
          category: req.body.category,
          user: req.body.user,
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
;

// GET POUR AFFICHER TOUES LES STRUCTURES


router.get("/showStructure", (req, res) => {
    Structure.find().then(data => {
    
        res.json({ structures: data });
      })
    });
;


router.get("/showStructure/:user", (req, res) => {

  Structure.find({ user: req.params.user }).then((structure) => {
    console.log(structure);
    if (structure) {
      res.json({ result: true, userData: structure });
    } else {
      res.json({ result: false, error: "Pas de Structure trouvée" });
    }
  });
});

router.delete("/deleteStructure/:user", (req, res) => {
  Structure.deleteOne({ user: req.params.user })
    .then((data) => {
      res.json({ result: true, response: "Structure supprimée" });
    })
    .catch((err) => {
      res.status(500).json({ result: false, error: "Pas supprimé" });
    });
});


module.exports = router;
