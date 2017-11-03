exports.up = (knex, Promise) => knex.schema.createTableIfNotExists('uploads', (table) => {
  table.increments().primary();
  table.integer('user_id').unsigned().references('users.id');
  table.string('filename');
  table.integer('size').unsigned()
  table.timestamp('created_at');
});

exports.down = (knex, Promise) => knex.schema.dropTableIfExists('uploads');
