
exports.up = function(knex, Promise) {
  return knex.schema.table('students', table => {
    table.integer('teacher_id').references('id').inTable('teachers')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('students', table => {
    table.dropColumn('teacher_id')
  })
};
