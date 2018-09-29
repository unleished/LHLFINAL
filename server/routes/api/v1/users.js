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

<<<<<<< HEAD
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
=======
// router.get("/login", function(req, res, next) {
//   knex
//     .select("*")
//     .from("users")
//     .where(email: req.email)
//     .then(rows => {
//       res.json(rows);
//       passwrod from db = pass from req
//
//     })
//     .catch(error => {
//       console.error("error: ", error);
//     });
// });
>>>>>>> 7255c80403716c9c18c13cdda82155fe7ea393a6

module.exports = router;
