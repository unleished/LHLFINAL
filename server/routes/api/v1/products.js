var express = require("express");
var router = express.Router();
const knexConfig = require("../../../knexfile.js");
const knex = require("knex")(knexConfig["development"]);


router.get("/", function(req, res, next) {
  knex.from('products').innerJoin('images', 'products.id', 'images.product_id')
    .then(rows => {
      const obj = {
        id: rows.id,
        name: rows.name,
        description: rows.description,
        category: rows.category,
        price: rows.price,
        product_id: rows.product_id,
        images:{
          path_1: rows.path_1,
          path_2: rows.path_2,
          path_3: rows.path_3,
          path_4: rows.path_4
      }
    }
    const arrayObj = rows.map(obj);
      res.json(arrayObj);
    })
    .catch(error => {
      console.error("error: ", error);
    });
});

router.get("/:id", function(req, res, next) {

  knex.from('products').innerJoin('images', 'products.id', 'images.product_id')
    .where({'id': req.params.id})
    .then(rows => {
      res.json(rows);
    })
    .catch(error => {
      console.error("error: ", error);
    });
 });


module.exports = router;