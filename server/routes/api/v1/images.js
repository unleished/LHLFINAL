

var express = require("express");
var router = express.Router();
const knexConfig = require("../../../knexfile.js");
const environment = process.env.NODE_ENV || 'development';
const knex = require("knex")(knexConfig[environment]);

/* GET users listing. */
router.get("/", function(req, res, next) {
  knex
    .select("*")
    .from("images")
    .then(rows => {
      res.json(rows);
    })
    .catch(error => {
      console.error("error: ", error);
    });
});

router.get("/:category", function(req, res, next) {

  knex.from('products').innerJoin('images', 'products.id', 'images.product_id')
    .where({'category': req.params.category})
    .then(rows => {
      res.json(rows);
    })
    .catch(error => {
      console.error("error: ", error);
    });
 });

module.exports = router;
