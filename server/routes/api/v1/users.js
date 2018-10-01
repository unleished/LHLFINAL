var express = require("express");
var router = express.Router();
const knexConfig = require("../../../knexfile.js");
const knex = require("knex")(knexConfig["development"]);
const bcrypt = require('bcrypt');

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
    .where({email: req.body.email}).first()
    .then(row => {
      res.json(row);
      // bcrypt.compare(req.body.password, row.password, function(err, res) {
      //   console.log(res);
      //     if(res){
      //      res.json({email: row.email});
      //       const token = jsonWebToken.sign(user, myJWTSecretKey);
      //       res.json({
      //         token: token
      //        });
      //     }else{
      //      console.error("error: ", err);
      //     }
      //    })
        })
    .catch(error => {
      console.error("error: ", error);
    });
});


module.exports = router;
