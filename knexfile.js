// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      database: 'products',
      user: 'root',
      password: 'passwd'
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      database: 'products',
      user: 'root',
      password: 'passwd'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      database: 'products',
      user: 'root',
      password: 'passwd'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
