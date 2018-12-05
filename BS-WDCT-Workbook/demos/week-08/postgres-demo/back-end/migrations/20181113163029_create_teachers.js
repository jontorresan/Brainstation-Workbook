exports.up = function (knex, Promise) {
  return knex.schema.createTableIfNotExists('teachers', function (table) {
    table.increments('id').primary();
    table.string('name')
      .notNullable()
    table.string('email')
      .notNullable()
      .unique()
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('teachers')
};