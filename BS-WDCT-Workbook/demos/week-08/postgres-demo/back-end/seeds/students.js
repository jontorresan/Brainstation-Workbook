
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Jonathan', email: 'j@g.com'},
        {name: 'Tim', email: 'tim@g.com'},
        {name: 'Tomy', email: 'tomy@g.com'}
      ]);
    });
};
