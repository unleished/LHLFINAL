exports.up = function(knex, Promise) {
  return Promise.all([
     knex.schema.createTable('qr_codes', table => {
       table.increments('id').primary();
       table.string('url');
       table.integer('product_id');
       table.foreign('product_id')
        .references('products.id');
     })
 ]);
};

  exports.down = function(knex, Promise) {
  return Promise.all([
     knex.schema.dropTable('qr_codes')
    ]);
  };


