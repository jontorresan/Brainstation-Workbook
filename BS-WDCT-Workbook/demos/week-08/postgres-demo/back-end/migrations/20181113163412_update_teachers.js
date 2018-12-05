
exports.up = function(knex, Promise) {
  return knex.schema.table('teachers', function(table) {
    table.string('phone').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('teachers', function(table) {
    table.dropColumn('phone')
  })
};
