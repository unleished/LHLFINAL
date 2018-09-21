
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {id: 1, name: 'Furniture Name'},
        {id: 2, description: 'Hipster description stuff here'},
        {id: 3, quantity: '1'},
        {id: 4, price: '200'}
      ]);
    });
};

