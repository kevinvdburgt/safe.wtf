const migrations = {
  tableName: 'migrations',
  directory: `${__dirname}/../database/migrations/`,
};

module.exports = {
  client: 'sqlite',
  connection: { filename: `${__dirname}/../database/db.sqlite` },
  useNullAsDefault: true,
  migrations,
};
