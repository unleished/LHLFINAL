var express = require("express");
var router = express.Router();
const knexConfig = require("../../../knexfile.js");
const knex = require("knex")(knexConfig["development"]);

/* GET users listing. */
router.get("/", function(req, res, next) {
  knex
    .select("*")
    .from("users")
    .then(rows => {
      res.json(rows);
    })
    .catch(error => {
      console.error("error: ", error);
    });
});

router.post("/login", function(req, res, next) {
  knex
    .select("*")
    .from("users")
    .where('email', req.body.email)
    .then(rows => {
      console.log('hahahaha: '+ rows)
      res.json(rows);
    })
    .catch(error => {
      console.error("error: ", error);
    });
});

module.exports = router;