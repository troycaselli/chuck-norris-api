const sharedConfig = {
  client: 'sqlite3',
  migrations: {
    directory: './src/data/migrations'
  },
  seeds: {
    directory: './src/data/seeds'
  },
  useNullAsDefault: true
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: {
      filename: './src/data/test.db3'
    },
  },
};
