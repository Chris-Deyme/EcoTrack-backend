var express = require('express');
var router = express.Router();

router.post("/creation", (req, res) => {
    if (!checkBody(req.body, ["email", "password"])) {
      res.json({ result: false, error: "Missing or empty fields" });
      return;
    }
  
    // Find avec $and qui permet de vérifier que le username ET l'email sont bons
  
    User.findOne({ email: req.body.email }).then((data) => {
      if (!data) {
        res.json({ result: false, error: "User not found" });
      } else if (bcrypt.compareSync(req.body.password, data.password)) {
        res.json({ result: true, token: data.token });
      } else {
        res.json({ result: false, error: "Wrong password" });
      }
    });
  });

module.exports = router;
