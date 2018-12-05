exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('students', function (table) {
      table.increments('id').primary(); // adds incrementing int for id
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
      table.string('name') 
          .notNullable()
      table.string('email')
          .notNullable()
          .unique()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users') // drop table when reverting
};