exports.up = function(knex, Promise) {
  return Promise.all([
   knex.schema.createTable('images', table => {
    table.integer('product_id');
    table.foreign('product_id')
    .references('products.id');
    table.string('path_1');
    table.string('path_2');
    table.string('path_3');
    table.string('path_4');
   }),
 ]);
};

exports.down = function(knex, Promise) {
return Promise.all([
   knex.schema.dropTable('images'),
 ]);
};