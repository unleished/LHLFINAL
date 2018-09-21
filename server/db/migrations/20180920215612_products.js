exports.up = function(knex, Promise) {
   return Promise.all([
    knex.schema.createTable('products', table => {
      table.increments('id').primary();
      table.string('name');
      table.text('description');
      table.string('category');
      table.integer('price');
    }),
  ]);
};

exports.down = function(knex, Promise) {
 return Promise.all([
    knex.schema.dropTable('products'),
  ]);
};
