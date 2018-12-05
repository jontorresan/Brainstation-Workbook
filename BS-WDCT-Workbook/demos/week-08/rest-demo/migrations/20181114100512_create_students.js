
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('program').notNullable()
    table.integer('grade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students')
};
