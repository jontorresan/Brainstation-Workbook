
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Jonathan', program: 'Web Dev'},
        {name: 'Tim', program: 'Web Dev'},
        {name: 'Tomy', program: 'Web Dev'},
        {name: 'Brad', program: 'UX'},
        {name: 'Stan', program: 'UX'}
      ]);
    });
};
