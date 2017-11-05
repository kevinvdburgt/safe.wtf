exports.up = (knex, Promise) => knex.schema.createTableIfNotExists('users', (table) => {
  table.increments().primary();
  table.string('username');
  table.string('password');
  table.string('token');
  table.boolean('is_admin').defaultTo(false);
  table.timestamps();
});

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('users');
